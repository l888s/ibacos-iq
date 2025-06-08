
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
    const { data, error } = await supabase
      .from('neighborhoods')
      .select('*')
      .order('name');
    
    if (error) {
      toast({ title: "Error", description: "Failed to load neighborhoods", variant: "destructive" });
    } else {
      setNeighborhoods(data || []);
    }
  };

  const fetchUsers = async () => {
    // Fetch from both profiles and app_users tables
    const { data: profilesData, error: profilesError } = await supabase
      .from('profiles')
      .select('*')
      .order('name');
    
    const { data: appUsersData, error: appUsersError } = await supabase
      .from('app_users')
      .select('*')
      .order('name');
    
    if (profilesError && appUsersError) {
      toast({ title: "Error", description: "Failed to load users", variant: "destructive" });
    } else {
      // Combine and deduplicate users
      const allUsers = [...(profilesData || []), ...(appUsersData || [])];
      const uniqueUsers = allUsers.filter((user, index, self) => 
        index === self.findIndex(u => u.email === user.email)
      );
      setUsers(uniqueUsers);
    }
  };

  const fetchEmailSettings = async () => {
    const { data, error } = await supabase
      .from('email_settings')
      .select('*')
      .maybeSingle();
    
    if (error && error.code !== 'PGRST116') {
      console.error('Failed to load email settings:', error);
      toast({ title: "Error", description: "Failed to load email settings", variant: "destructive" });
    } else if (!data) {
      // Create default email settings if none exist
      const { data: newSettings, error: createError } = await supabase
        .from('email_settings')
        .insert([{ 
          report_recipients: ['jason.edwards@starlighthomes.com'] 
        }])
        .select()
        .single();
      
      if (createError) {
        console.error('Failed to create email settings:', createError);
        toast({ title: "Error", description: "Failed to create email settings", variant: "destructive" });
      } else {
        setEmailSettings(newSettings);
        toast({ title: "Success", description: "Email settings created with Jason Edwards added", });
      }
    } else {
      setEmailSettings(data);
      
      // Check if Jason Edwards needs to be added
      if (!data.report_recipients.includes('jason.edwards@starlighthomes.com')) {
        const updatedRecipients = [...data.report_recipients, 'jason.edwards@starlighthomes.com'];
        
        const { error: updateError } = await supabase
          .from('email_settings')
          .update({ report_recipients: updatedRecipients })
          .eq('id', data.id);
        
        if (updateError) {
          console.error('Failed to add Jason Edwards:', updateError);
        } else {
          setEmailSettings({ ...data, report_recipients: updatedRecipients });
          toast({ title: "Success", description: "Jason Edwards added to email recipients", });
        }
      }
    }
  };

  const addNeighborhood = async () => {
    if (!newNeighborhood.trim()) return;

    const { error } = await supabase
      .from('neighborhoods')
      .insert([{ name: newNeighborhood.trim() }]);

    if (error) {
      toast({ title: "Error", description: "Failed to add neighborhood", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Neighborhood added successfully" });
      setNewNeighborhood('');
      fetchNeighborhoods();
    }
  };

  const removeNeighborhood = async (id: string) => {
    const { error } = await supabase
      .from('neighborhoods')
      .delete()
      .eq('id', id);

    if (error) {
      toast({ title: "Error", description: "Failed to remove neighborhood", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Neighborhood removed successfully" });
      fetchNeighborhoods();
    }
  };

  const addUser = async () => {
    if (!newUserEmail.trim() || !newUserName.trim()) return;

    // For now, just add to app_users table. In the future, this should create a Supabase auth user
    const { error } = await supabase
      .from('app_users')
      .insert([{ 
        email: newUserEmail.trim(), 
        name: newUserName.trim(),
        role: 'inspector'
      }]);

    if (error) {
      toast({ title: "Error", description: "Failed to add user", variant: "destructive" });
    } else {
      toast({ 
        title: "Success", 
        description: "User added successfully. They can sign up with email: " + newUserEmail.trim() + " and password: starlighthomes" 
      });
      setNewUserEmail('');
      setNewUserName('');
      fetchUsers();
    }
  };

  const removeUser = async (user: AppUser) => {
    // Try to remove from both tables
    const { error: profileError } = await supabase
      .from('profiles')
      .delete()
      .eq('email', user.email);

    const { error: appUserError } = await supabase
      .from('app_users')
      .delete()
      .eq('id', user.id);

    if (profileError && appUserError) {
      toast({ title: "Error", description: "Failed to remove user", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "User removed successfully" });
      fetchUsers();
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

    if (!emailSettings) {
      // Create email settings if it doesn't exist
      const { data: newSettings, error: createError } = await supabase
        .from('email_settings')
        .insert([{ report_recipients: [newEmailRecipient.trim()] }])
        .select()
        .single();

      if (createError) {
        console.error('Error creating email settings:', createError);
        toast({ title: "Error", description: "Failed to add email recipient", variant: "destructive" });
      } else {
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

    const { error } = await supabase
      .from('email_settings')
      .update({ report_recipients: updatedRecipients })
      .eq('id', emailSettings.id);

    if (error) {
      console.error('Email update error:', error);
      toast({ title: "Error", description: "Failed to add email recipient", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Email recipient added successfully" });
      setNewEmailRecipient('');
      fetchEmailSettings();
    }
  };

  const removeEmailRecipient = async (email: string) => {
    if (!emailSettings) return;

    const updatedRecipients = emailSettings.report_recipients.filter(e => e !== email);

    const { error } = await supabase
      .from('email_settings')
      .update({ report_recipients: updatedRecipients })
      .eq('id', emailSettings.id);

    if (error) {
      toast({ title: "Error", description: "Failed to remove email recipient", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Email recipient removed successfully" });
      fetchEmailSettings();
    }
  };

  const isAdminUser = (email: string) => {
    return email === 'lewis.bedford@starlighthomes.com';
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
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="h-4 w-4 p-0"
                          onClick={() => removeEmailRecipient(email)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
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
