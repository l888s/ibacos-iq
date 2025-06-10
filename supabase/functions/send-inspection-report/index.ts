
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface InspectionReportRequest {
  inspection: {
    id: string;
    neighborhood: string;
    date: string;
    status: string;
    items: Array<{
      id: string;
      category: string;
      subcategory: string;
      item: string;
      weight: number;
      score: number | string | null;
      scoreDescriptions: Record<string, string>;
    }>;
    totalScore: number;
    maxScore: number;
    averageScore: number;
    inspectorName?: string;
  };
}

const generateEmailHTML = (inspection: any) => {
  const categoryScores: Record<string, { score: number; weight: number; itemCount: number }> = {};
  
  // Calculate category scores
  inspection.items.forEach((item: any) => {
    if (item.score !== null && item.score !== 'N/O') {
      if (!categoryScores[item.category]) {
        categoryScores[item.category] = { score: 0, weight: item.weight, itemCount: 0 };
      }
      categoryScores[item.category].score += Number(item.score) * item.weight;
      categoryScores[item.category].itemCount += 1;
    }
  });

  // Normalize category scores
  Object.keys(categoryScores).forEach(category => {
    if (categoryScores[category].itemCount > 0) {
      categoryScores[category].score = categoryScores[category].score / categoryScores[category].itemCount;
    }
  });

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Inspection Report - ${inspection.neighborhood}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
          .header { text-align: center; margin-bottom: 30px; background-color: #f8f9fa; padding: 20px; border-radius: 8px; }
          .section { margin-bottom: 25px; }
          .category { margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 8px; background-color: #fafafa; }
          .item { margin-left: 20px; margin-bottom: 12px; padding: 8px; background-color: white; border-radius: 4px; }
          .score { font-weight: bold; color: #2563eb; }
          .summary { background-color: #e3f2fd; padding: 20px; border-radius: 8px; border-left: 4px solid #2196f3; }
          table { width: 100%; border-collapse: collapse; margin-top: 15px; }
          th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
          th { background-color: #f2f2f2; font-weight: bold; }
          .footer { margin-top: 40px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 20px; }
          .logo { color: #2196f3; font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">🏠 Starlight Homes</div>
          <h1>Inspection Report</h1>
          <h2>${inspection.neighborhood}</h2>
          <p><strong>Inspection Date:</strong> ${new Date(inspection.date).toLocaleDateString()}</p>
          <p><strong>Status:</strong> ${inspection.status}</p>
          ${inspection.inspectorName ? `<p><strong>Inspector:</strong> ${inspection.inspectorName}</p>` : ''}
        </div>
        
        <div class="summary">
          <h3>📊 Summary</h3>
          <p><strong>Overall Weighted Average Score:</strong> <span class="score">${inspection.averageScore.toFixed(2)}/3.52</span></p>
          <p><strong>Total Items Inspected:</strong> ${inspection.items.filter((item: any) => item.score !== null).length} of ${inspection.items.length}</p>
          <p><strong>Report Generated:</strong> ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
        </div>
        
        <div class="section">
          <h3>🏷️ Category Scores (Weighted)</h3>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Average Score</th>
                <th>Weight</th>
                <th>Items Scored</th>
              </tr>
            </thead>
            <tbody>
              ${Object.entries(categoryScores).map(([category, data]) => `
                <tr>
                  <td>${category}</td>
                  <td class="score">${data.score.toFixed(2)}/3.52</td>
                  <td>${data.weight}</td>
                  <td>${data.itemCount}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        
        <div class="section">
          <h3>📋 Detailed Results</h3>
          ${Object.entries(
            inspection.items.reduce((acc: any, item: any) => {
              if (!acc[item.category]) acc[item.category] = [];
              acc[item.category].push(item);
              return acc;
            }, {})
          ).map(([category, items]: [string, any]) => `
            <div class="category">
              <h4>${category} (Weight: ${items[0].weight})</h4>
              ${items.map((item: any) => `
                <div class="item">
                  <strong>${item.subcategory} - ${item.item}</strong><br>
                  Score: <span class="score">${item.score !== null ? item.score : 'Not Scored'}</span>
                  ${item.score !== null && item.score !== 'N/O' && item.scoreDescriptions[item.score] ? 
                    ` - ${item.scoreDescriptions[item.score]}` : 
                    ''}
                </div>
              `).join('')}
            </div>
          `).join('')}
        </div>
        
        <div class="footer">
          <p><strong>Starlight Homes Inspection System</strong></p>
          <p>This report was automatically generated by the Starlight Homes inspection management system.</p>
          <p>For questions about this report, please contact your inspection team.</p>
        </div>
      </body>
    </html>
  `;
};

const handler = async (req: Request): Promise<Response> => {
  console.log('Send inspection report function called');

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { inspection }: InspectionReportRequest = await req.json();
    console.log('Processing inspection report for:', inspection.neighborhood);

    // Get email recipients from database
    const { data: emailSettings, error: emailError } = await supabaseClient
      .from('email_settings')
      .select('report_recipients')
      .limit(1)
      .single();

    if (emailError && emailError.code !== 'PGRST116') {
      console.error('Error fetching email settings:', emailError);
      throw new Error('Failed to fetch email recipients');
    }

    const recipients = emailSettings?.report_recipients || [];
    console.log('Email recipients found:', recipients);

    if (recipients.length === 0) {
      console.log('No email recipients configured');
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'No email recipients configured' 
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders }
        }
      );
    }

    // Generate email content
    const emailHTML = generateEmailHTML(inspection);
    const subject = `Inspection Report - ${inspection.neighborhood} - ${new Date(inspection.date).toLocaleDateString()}`;

    console.log('Sending email to recipients:', recipients);

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "Starlight Homes <noreply@starlighthomes.com>",
      to: recipients,
      subject: subject,
      html: emailHTML,
    });

    console.log('Email sent successfully:', emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        emailId: emailResponse.data?.id,
        recipients: recipients.length
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      }
    );

  } catch (error: any) {
    console.error("Error in send-inspection-report function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      }
    );
  }
};

serve(handler);
