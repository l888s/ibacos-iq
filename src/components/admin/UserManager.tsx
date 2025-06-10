import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trash2, Edit, Save, X, UserPlus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  first_login: boolean;
  created_at: string;
}

const UserManager = () => {
  const { session } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ email: '', name: '', role: 'inspector' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingUser, setEditingUser] = useState({ name: '', role: '' });
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUsers(data || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast({
        title: "Error",
        description: "Failed to load users",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const createUser = async () => {
    if (!newUser.email.trim() || !newUser.name.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (!session?.access_token) {
      toast({
        title: "Error",
        description: "Not authenticated",
        variant: "destructive"
      });
      return;
    }

    setCreating(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('create-user', {
        body: {
          email: newUser.email.trim(),
          name: newUser.name.trim(),
          role: newUser.role
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`
        }
      });

      if (error) {
        console.error('Function error:', error);
        throw new Error(error.message || 'Failed to create user');
      }

      if (data.error) {
        throw new Error(data.error);
      }

      // Copy password to clipboard if available
      if (data.tempPassword && navigator.clipboard) {
        await navigator.clipboard.writeText(data.tempPassword);
        toast({
          title: "Success",
          description: `User created successfully! Temporary password copied to clipboard: ${data.tempPassword}`,
        });
      } else {
        toast({
          title: "Success", 
          description: `User created successfully! Temporary password: ${data.tempPassword} (Please save this password)`,
        });
      }
      
      setNewUser({ email: '', name: '', role: 'inspector' });
      
      // Refresh the users list
      setTimeout(() => {
        fetchUsers();
      }, 1000);
      
    } catch (error: any) {
      console.error('Error creating user:', error);
      
      let errorMessage = "Failed to create user";
      if (error.message?.includes('User already registered')) {
        errorMessage = "A user with this email already exists";
      } else if (error.message?.includes('Invalid email')) {
        errorMessage = "Please enter a valid email address";
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setCreating(false);
    }
  };

  const updateUser = async (id: string) => {
    if (!editingUser.name.trim()) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ 
          name: editingUser.name.trim(),
          role: editingUser.role 
        })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "User updated successfully"
      });
      
      setEditingId(null);
      setEditingUser({ name: '', role: '' });
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
      toast({
        title: "Error",
        description: "Failed to update user",
        variant: "destructive"
      });
    }
  };

  const deleteUser = async (id: string, email: string) => {
    if (!confirm(`Are you sure you want to delete user "${email}"? This action cannot be undone.`)) return;

    try {
      // We can only delete from profiles table, not from auth.users
      const { error } = await supabase
        .from('profiles')
        .delete()
        .eq('id', id);
      
      if (error) throw error;

      toast({
        title: "Success",
        description: "User profile deleted successfully"
      });
      
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      toast({
        title: "Error",
        description: "Failed to delete user",
        variant: "destructive"
      });
    }
  };

  const startEditing = (user: User) => {
    setEditingId(user.id);
    setEditingUser({ name: user.name, role: user.role });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditingUser({ name: '', role: '' });
  };

  if (loading) {
    return <div className="text-center py-4">Loading users...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Add New User */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <UserPlus className="h-5 w-5" />
              <span>Create New User</span>
            </h3>
            <p className="text-sm text-gray-600">
              A temporary password will be generated and provided for the new user.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="new-email">Email</Label>
                <Input
                  id="new-email"
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  placeholder="user@example.com"
                  disabled={creating}
                />
              </div>
              
              <div>
                <Label htmlFor="new-name">Name</Label>
                <Input
                  id="new-name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  placeholder="Full Name"
                  disabled={creating}
                />
              </div>
              
              <div>
                <Label htmlFor="new-role">Role</Label>
                <Select 
                  value={newUser.role} 
                  onValueChange={(value) => setNewUser({ ...newUser, role: value })}
                  disabled={creating}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inspector">Inspector</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button 
                  onClick={createUser} 
                  disabled={!newUser.email.trim() || !newUser.name.trim() || creating}
                  className="w-full"
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  {creating ? 'Creating...' : 'Create User'}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Existing Users */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Existing Users ({users.length})</h3>
        
        {users.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center text-gray-500">
              No users found. Create one above to get started.
            </CardContent>
          </Card>
        ) : (
          users.map((user) => (
            <Card key={user.id}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  {editingId === user.id ? (
                    <div className="flex items-center space-x-3 flex-1">
                      <Input
                        value={editingUser.name}
                        onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                        placeholder="Name"
                        className="flex-1"
                      />
                      <Select 
                        value={editingUser.role} 
                        onValueChange={(value) => setEditingUser({ ...editingUser, role: value })}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inspector">Inspector</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="flex items-center space-x-2">
                        <Button 
                          size="sm" 
                          onClick={() => updateUser(user.id)}
                          disabled={!editingUser.name.trim()}
                        >
                          <Save className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={cancelEditing}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <div className="flex items-center space-x-3 mb-1">
                          <h4 className="font-medium">{user.name}</h4>
                          <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                            {user.role}
                          </Badge>
                          {user.first_login && (
                            <Badge variant="outline">First Login</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <p className="text-sm text-gray-500">
                          Created: {new Date(user.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" onClick={() => startEditing(user)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive" 
                          onClick={() => deleteUser(user.id, user.email)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default UserManager;
