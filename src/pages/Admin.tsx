
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Plus, Trash2, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';

interface Neighborhood {
  id: string;
  name: string;
}

interface AppUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface EmailSettings {
  id: string;
  report_recipients: string[];
}

const Admin = () => {
  const { profile } = useAuth();
  const navigate = useNavigate();
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const [users, setUsers] = useState<AppUser[]>([]);
  const [emailSettings, setEmailSettings] = useState<EmailSettings | null>(null);
  const [newNeighborhood, setNewNeighborhood] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [newEmailRecipient, setNewEmailRecipient] = useState('');

  // Check if user is admin
  if (profile?.role !== 'admin') {
    navigate('/');
    return null;
  }

  useEffect(() => {
    fetchNeighborhoods();
    fetchUsers();
    fetchEmailSettings();
  }, []);

  const fetchNeighborhoods = async () => {
    console.log('Fetching neighborhoods...');
    const { data, error } = await supabase
      .from('neighborhoods')
      .select('*')
      .order('name');
    
    if (error) {
      console.error('Error fetching neighborhoods:', error);
      toast({ title: "Error", description: "Failed to load neighborhoods", variant: "destructive" });
    } else {
      console.log('Neighborhoods fetched successfully:', data);
      setNeighborhoods(data || []);
    }
  };

  const fetchUsers = async () => {
    console.log('Fetching users...');
    
    // Fetch from profiles table
    const { data: profilesData, error: profilesError } = await supabase
      .from('profiles')
      .select('id, email, name, role')
      .order('name');
    
    console.log('Profiles data:', profilesData, 'Error:', profilesError);
    
    // Fetch from app_users table
    const { data: appUsersData, error: appUsersError } = await supabase
      .from('app_users')
      .select('id, email, name, role')
      .order('name');
    
    console.log('App users data:', appUsersData, 'Error:', appUsersError);
    
    if (profilesError && appUsersError) {
      console.error('Both queries failed:', { profilesError, appUsersError });
      toast({ title: "Error", description: "Failed to load users", variant: "destructive" });
    } else {
      // Combine and deduplicate users
      const allUsers = [...(profilesData || []), ...(appUsersData || [])];
      const uniqueUsers = allUsers.filter((user, index, self) => 
        index === self.findIndex(u => u.email === user.email)
      );
      console.log('Combined unique users:', uniqueUsers);
      setUsers(uniqueUsers);
    }
  };

  const fetchEmailSettings = async () => {
    console.log('Fetching email settings...');
    const { data, error } = await supabase
      .from('email_settings')
      .select('*')
      .maybeSingle();
    
    console.log('Email settings response:', { data, error });
    
    if (error && error.code !== 'PGRST116') {
      console.error('Failed to load email settings:', error);
      toast({ title: "Error", description: "Failed to load email settings", variant: "destructive" });
      return;
    }
    
    const requiredEmails = ['jason.edwards@starlighthomes.com'];
    
    if (!data) {
      console.log('No email settings found, creating with required emails...');
      // Create default email settings if none exist
      const { data: newSettings, error: createError } = await supabase
        .from('email_settings')
        .insert([{ 
          report_recipients: requiredEmails 
        }])
        .select()
        .single();
      
      if (createError) {
        console.error('Failed to create email settings:', createError);
        toast({ title: "Error", description: "Failed to create email settings", variant: "destructive" });
      } else {
        console.log('Email settings created successfully:', newSettings);
        setEmailSettings(newSettings);
        toast({ title: "Success", description: "Email settings created with required recipients" });
      }
    } else {
      console.log('Email settings found:', data);
      setEmailSettings(data);
      
      // Check if any required emails need to be added
      const missingEmails = requiredEmails.filter(email => 
        !data.report_recipients.includes(email)
      );
      
      if (missingEmails.length > 0) {
        console.log('Adding missing required emails:', missingEmails);
        const updatedRecipients = [...data.report_recipients, ...missingEmails];
        
        const { data: updatedData, error: updateError } = await supabase
          .from('email_settings')
          .update({ report_recipients: updatedRecipients })
          .eq('id', data.id)
          .select()
          .single();
        
        if (updateError) {
          console.error('Failed to add required emails:', updateError);
          toast({ title: "Error", description: "Failed to add required email recipients", variant: "destructive" });
        } else {
          setEmailSettings(updatedData);
          console.log('Required emails added successfully');
          toast({ title: "Success", description: `Added ${missingEmails.join(', ')} to email recipients` });
        }
      }
    }
  };

  const addNeighborhood = async () => {
    if (!newNeighborhood.trim()) return;

    console.log('Adding neighborhood:', newNeighborhood.trim());
    const { error } = await supabase
      .from('neighborhoods')
      .insert([{ name: newNeighborhood.trim() }]);

    if (error) {
      console.error('Error adding neighborhood:', error);
      toast({ title: "Error", description: "Failed to add neighborhood", variant: "destructive" });
    } else {
      console.log('Neighborhood added successfully');
      toast({ title: "Success", description: "Neighborhood added successfully" });
      setNewNeighborhood('');
      fetchNeighborhoods();
    }
  };

  const removeNeighborhood = async (id: string) => {
    console.log('Removing neighborhood:', id);
    const { error } = await supabase
      .from('neighborhoods')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error removing neighborhood:', error);
      toast({ title: "Error", description: "Failed to remove neighborhood", variant: "destructive" });
    } else {
      console.log('Neighborhood removed successfully');
      toast({ title: "Success", description: "Neighborhood removed successfully" });
      fetchNeighborhoods();
    }
  };

  const addUser = async () => {
    if (!newUserEmail.trim() || !newUserName.trim()) {
      toast({ title: "Error", description: "Please fill in both name and email", variant: "destructive" });
      return;
    }

    console.log('Adding user:', { email: newUserEmail.trim(), name: newUserName.trim() });
    
    // Add to app_users table
    const { error } = await supabase
      .from('app_users')
      .insert([{ 
        email: newUserEmail.trim(), 
        name: newUserName.trim(),
        role: 'inspector'
      }]);

    if (error) {
      console.error('Error adding user:', error);
      toast({ title: "Error", description: `Failed to add user: ${error.message}`, variant: "destructive" });
    } else {
      console.log('User added successfully');
      toast({ 
        title: "Success", 
        description: `User added successfully. They can sign up with email: ${newUserEmail.trim()} and password: starlighthomes` 
      });
      setNewUserEmail('');
      setNewUserName('');
      fetchUsers();
    }
  };

  const removeUser = async (user: AppUser) => {
    console.log('Removing user:', user);
    
    // Try to remove from profiles table first
    const { error: profileError } = await supabase
      .from('profiles')
      .delete()
      .eq('email', user.email);

    console.log('Profile deletion result:', profileError);

    // Try to remove from app_users table
    const { error: appUserError } = await supabase
      .from('app_users')
      .delete()
      .eq('id', user.id);

    console.log('App user deletion result:', appUserError);

    // If at least one deletion succeeded, consider it successful
    if (!profileError || !appUserError) {
      console.log('User removed successfully');
      toast({ title: "Success", description: "User removed successfully" });
      fetchUsers();
    } else {
      console.error('Failed to remove user from both tables:', { profileError, appUserError });
      toast({ title: "Error", description: "Failed to remove user", variant: "destructive" });
    }
  };

  const addEmailRecipient = async () => {
    if (!newEmailRecipient.trim()) {
      toast({ title: "Error", description: "Please enter an email address", variant: "destructive" });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmailRecipient.trim())) {
      toast({ title: "Error", description: "Please enter a valid email address", variant: "destructive" });
      return;
    }

    console.log('Adding email recipient:', newEmailRecipient.trim());

    if (!emailSettings) {
      console.log('No email settings exist, creating new ones...');
      // Create email settings if it doesn't exist
      const { data: newSettings, error: createError } = await supabase
        .from('email_settings')
        .insert([{ report_recipients: [newEmailRecipient.trim()] }])
        .select()
        .single();

      if (createError) {
        console.error('Error creating email settings:', createError);
        toast({ title: "Error", description: `Failed to add email recipient: ${createError.message}`, variant: "destructive" });
      } else {
        console.log('Email settings created with new recipient');
        toast({ title: "Success", description: "Email recipient added successfully" });
        setNewEmailRecipient('');
        setEmailSettings(newSettings);
      }
      return;
    }

    // Check if email already exists
    if (emailSettings.report_recipients.includes(newEmailRecipient.trim())) {
      toast({ title: "Error", description: "Email address already exists", variant: "destructive" });
      return;
    }

    const updatedRecipients = [...emailSettings.report_recipients, newEmailRecipient.trim()];
    console.log('Updating recipients to:', updatedRecipients);

    const { data: updatedData, error } = await supabase
      .from('email_settings')
      .update({ report_recipients: updatedRecipients })
      .eq('id', emailSettings.id)
      .select()
      .single();

    if (error) {
      console.error('Email update error:', error);
      toast({ title: "Error", description: `Failed to add email recipient: ${error.message}`, variant: "destructive" });
    } else {
      console.log('Email recipient added successfully');
      toast({ title: "Success", description: "Email recipient added successfully" });
      setNewEmailRecipient('');
      setEmailSettings(updatedData);
    }
  };

  const removeEmailRecipient = async (email: string) => {
    if (!emailSettings) return;

    // Prevent removal of required emails
    const requiredEmails = ['jason.edwards@starlighthomes.com'];
    if (requiredEmails.includes(email)) {
      toast({ title: "Error", description: "This email recipient is required and cannot be removed", variant: "destructive" });
      return;
    }

    console.log('Removing email recipient:', email);
    const updatedRecipients = emailSettings.report_recipients.filter(e => e !== email);

    const { data: updatedData, error } = await supabase
      .from('email_settings')
      .update({ report_recipients: updatedRecipients })
      .eq('id', emailSettings.id)
      .select()
      .single();

    if (error) {
      console.error('Error removing email recipient:', error);
      toast({ title: "Error", description: `Failed to remove email recipient: ${error.message}`, variant: "destructive" });
    } else {
      console.log('Email recipient removed successfully');
      toast({ title: "Success", description: "Email recipient removed successfully" });
      setEmailSettings(updatedData);
    }
  };

  const isAdminUser = (email: string) => {
    return email === 'lewis.bedford@starlighthomes.com';
  };

  const isRequiredEmail = (email: string) => {
    return email === 'jason.edwards@starlighthomes.com';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Settings</h1>
          <p className="text-gray-600">Manage neighborhoods, users, and email settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Neighborhoods Management */}
          <Card>
            <CardHeader>
              <CardTitle>Neighborhoods</CardTitle>
              <CardDescription>Add or remove inspection neighborhoods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Neighborhood name"
                  value={newNeighborhood}
                  onChange={(e) => setNewNeighborhood(e.target.value)}
                />
                <Button onClick={addNeighborhood}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                {neighborhoods.map((neighborhood) => (
                  <div key={neighborhood.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <span>{neighborhood.name}</span>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => removeNeighborhood(neighborhood.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Users Management */}
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
              <CardDescription>Manage inspector users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Input
                  placeholder="User name"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                />
                <div className="flex space-x-2">
                  <Input
                    placeholder="User email"
                    type="email"
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                  />
                  <Button onClick={addUser}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  New users can sign up with their email and the password "starlighthomes"
                </p>
              </div>
              
              <div className="space-y-2">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium">{user.name}</p>
                        {isAdminUser(user.email) && (
                          <Badge variant="destructive" className="text-xs">
                            ADMIN
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      <Badge variant="secondary">{user.role}</Badge>
                    </div>
                    {!isAdminUser(user.email) && (
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => removeUser(user)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Email Settings */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Email Settings</CardTitle>
              <CardDescription>Manage who receives inspection reports</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Email address"
                  type="email"
                  value={newEmailRecipient}
                  onChange={(e) => setNewEmailRecipient(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      addEmailRecipient();
                    }
                  }}
                />
                <Button onClick={addEmailRecipient}>
                  <Mail className="h-4 w-4 mr-2" />
                  Add Recipient
                </Button>
              </div>
              
              <div className="space-y-2">
                <Label>Current Recipients:</Label>
                <div className="flex flex-wrap gap-2">
                  {emailSettings?.report_recipients?.length > 0 ? (
                    emailSettings.report_recipients.map((email) => (
                      <div key={email} className="flex items-center space-x-2 bg-blue-100 px-3 py-1 rounded-full">
                        <span className="text-sm">{email}</span>
                        {isRequiredEmail(email) && (
                          <Badge variant="secondary" className="text-xs ml-1">
                            Required
                          </Badge>
                        )}
                        {!isRequiredEmail(email) && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="h-4 w-4 p-0"
                            onClick={() => removeEmailRecipient(email)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No recipients added yet</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
