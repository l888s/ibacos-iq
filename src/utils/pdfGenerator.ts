
import { Inspection } from '@/types/inspection';
import { getCategoryWeightedScores } from './inspectionCalculations';
import { supabase } from '@/integrations/supabase/client';

const getInspectionPhotos = async (inspectionId: string) => {
  try {
    const { data, error } = await supabase
      .from('inspection_item_photos')
      .select('item_id, photo_url')
      .eq('inspection_id', inspectionId);

    if (error) {
      console.error('Error fetching photos:', error);
      return {};
    }

    const photosByItem: Record<string, string[]> = {};
    data?.forEach((photo) => {
      if (!photosByItem[photo.item_id]) {
        photosByItem[photo.item_id] = [];
      }
      photosByItem[photo.item_id].push(photo.photo_url);
    });

    return photosByItem;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return {};
  }
};

export const generateInspectionPDF = async (inspection: Inspection): Promise<Blob> => {
  const categoryScores = getCategoryWeightedScores(inspection.items);
  const photosByItem = await getInspectionPhotos(inspection.id);
  
  const htmlContent = `
    <html>
      <head>
        <title>Inspection Report - ${inspection.neighborhood}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .header { text-align: center; margin-bottom: 30px; }
          .section { margin-bottom: 20px; }
          .category { margin-bottom: 15px; padding: 10px; border: 1px solid #ddd; }
          .item { margin-left: 20px; margin-bottom: 15px; padding: 10px; border-left: 3px solid #e0e0e0; }
          .score { font-weight: bold; color: #2563eb; }
          .summary { background-color: #f8f9fa; padding: 15px; border-radius: 5px; }
          .photos { margin-top: 10px; display: flex; flex-wrap: wrap; gap: 10px; }
          .photo { max-width: 200px; max-height: 150px; border: 1px solid #ddd; border-radius: 4px; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
          @media print {
            .photo { max-width: 150px; max-height: 100px; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Inspection Report</h1>
          <h2>${inspection.neighborhood}</h2>
          <p>Date: ${new Date(inspection.date).toLocaleDateString()}</p>
          <p>Status: ${inspection.status}</p>
          ${inspection.inspectorName ? `<p>Inspector: ${inspection.inspectorName}</p>` : ''}
        </div>
        
        <div class="summary">
          <h3>Summary</h3>
          <p><strong>Overall Weighted Average Score:</strong> <span class="score">${inspection.averageScore.toFixed(2)}/3.52</span></p>
          <p><strong>Total Items Inspected:</strong> ${inspection.items.filter(item => item.score !== null).length}</p>
          <p><strong>Completion Date:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        
        <div class="section">
          <h3>Category Scores (Weighted)</h3>
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
                  <td>${data.score.toFixed(2)}/3.52</td>
                  <td>${data.weight}</td>
                  <td>${data.itemCount}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        
        <div class="section">
          <h3>Detailed Results</h3>
          ${Object.entries(
            inspection.items.reduce((acc, item) => {
              if (!acc[item.category]) acc[item.category] = [];
              acc[item.category].push(item);
              return acc;
            }, {} as Record<string, typeof inspection.items>)
          ).map(([category, items]) => `
            <div class="category">
              <h4>${category} (Weight: ${items[0].weight})</h4>
              ${items.map(item => `
                <div class="item">
                  <strong>${item.subcategory} - ${item.item}</strong><br>
                  Score: <span class="score">${item.score !== null ? item.score : 'Not Scored'}</span>
                  ${item.score !== null && item.score !== 'N/O' ? 
                    ` - ${item.scoreDescriptions[item.score as keyof typeof item.scoreDescriptions]}` : 
                    ''}
                  ${photosByItem[item.id] && photosByItem[item.id].length > 0 ? `
                    <div class="photos">
                      ${photosByItem[item.id].map((photoUrl, index) => `
                        <img src="${photoUrl}" alt="Inspection photo ${index + 1}" class="photo" />
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          `).join('')}
        </div>
        
        <div class="footer" style="margin-top: 30px; text-align: center; font-size: 12px; color: #666;">
          <p>Report generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
        </div>
      </body>
    </html>
  `;
  
  // Create a blob with the HTML content
  return new Blob([htmlContent], { type: 'text/html' });
};

export const downloadPDF = async (inspection: Inspection) => {
  const blob = await generateInspectionPDF(inspection);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `inspection-report-${inspection.neighborhood}-${new Date(inspection.date).toISOString().split('T')[0]}.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
