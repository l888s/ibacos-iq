
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trash2, Plus, Save, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface EmailSettings {
  id: string;
  report_recipients: string[];
  updated_at: string;
}

const EmailSettingsManager = () => {
  const [emailSettings, setEmailSettings] = useState<EmailSettings | null>(null);
  const [newEmail, setNewEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmailSettings();
  }, []);

  const fetchEmailSettings = async () => {
    try {
      console.log('Fetching email settings...');
      const { data, error } = await supabase
        .from('email_settings')
        .select('*')
        .limit(1)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching email settings:', error);
        throw error;
      }
      
      console.log('Email settings fetched:', data);
      setEmailSettings(data);
    } catch (error) {
      console.error('Error fetching email settings:', error);
      toast({
        title: "Error",
        description: "Failed to load email settings",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const createOrUpdateSettings = async (recipients: string[]) => {
    try {
      console.log('Updating email settings with recipients:', recipients);
      
      if (emailSettings) {
        // Update existing
        const { error } = await supabase
          .from('email_settings')
          .update({ report_recipients: recipients })
          .eq('id', emailSettings.id);

        if (error) {
          console.error('Error updating email settings:', error);
          throw error;
        }
        console.log('Email settings updated successfully');
      } else {
        // Create new
        const { error } = await supabase
          .from('email_settings')
          .insert([{ report_recipients: recipients }]);

        if (error) {
          console.error('Error creating email settings:', error);
          throw error;
        }
        console.log('Email settings created successfully');
      }

      toast({
        title: "Success",
        description: "Email settings updated successfully"
      });
      
      // Refresh the settings to show the updated list
      await fetchEmailSettings();
    } catch (error) {
      console.error('Error updating email settings:', error);
      toast({
        title: "Error",
        description: "Failed to update email settings",
        variant: "destructive"
      });
    }
  };

  const addEmail = async () => {
    if (!newEmail.trim() || !isValidEmail(newEmail)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    const currentRecipients = emailSettings?.report_recipients || [];
    
    if (currentRecipients.includes(newEmail.trim())) {
      toast({
        title: "Error",
        description: "This email is already in the list",
        variant: "destructive"
      });
      return;
    }

    const newRecipients = [...currentRecipients, newEmail.trim()];
    await createOrUpdateSettings(newRecipients);
    setNewEmail('');
  };

  const removeEmail = async (emailToRemove: string) => {
    if (!emailSettings) return;

    const newRecipients = emailSettings.report_recipients.filter(
      email => email !== emailToRemove
    );
    
    await createOrUpdateSettings(newRecipients);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (loading) {
    return <div className="text-center py-4">Loading email settings...</div>;
  }

  const recipients = emailSettings?.report_recipients || [];

  return (
    <div className="space-y-6">
      {/* Add New Email */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>Report Recipients</span>
            </h3>
            <p className="text-sm text-gray-600">
              Add email addresses that should receive inspection reports
            </p>
            
            <div className="flex items-end space-x-4">
              <div className="flex-1">
                <Label htmlFor="new-email">Email Address</Label>
                <Input
                  id="new-email"
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="recipient@example.com"
                  onKeyPress={(e) => e.key === 'Enter' && addEmail()}
                />
              </div>
              <Button 
                onClick={addEmail} 
                disabled={!newEmail.trim() || !isValidEmail(newEmail)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Email
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Recipients */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">
          Current Recipients ({recipients.length})
        </h3>
        
        {recipients.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center text-gray-500">
              No email recipients configured. Add one above to get started.
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-3">
            {recipients.map((email, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">{email}</span>
                      <Badge variant="secondary">Recipient</Badge>
                    </div>
                    <Button 
                      size="sm" 
                      variant="destructive" 
                      onClick={() => removeEmail(email)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        {emailSettings && (
          <p className="text-sm text-gray-500 mt-4">
            Last updated: {new Date(emailSettings.updated_at).toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default EmailSettingsManager;
