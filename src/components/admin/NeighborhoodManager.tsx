import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2, Plus, Edit, Save, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Neighborhood {
  id: string;
  name: string;
  created_at: string;
}

const NeighborhoodManager = () => {
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const [newNeighborhood, setNewNeighborhood] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNeighborhoods();
  }, []);

  const fetchNeighborhoods = async () => {
    try {
      console.log('Fetching neighborhoods...');
      const { data, error } = await supabase
        .from('neighborhoods')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching neighborhoods:', error);
        throw error;
      }
      console.log('Neighborhoods fetched successfully:', data);
      setNeighborhoods(data || []);
    } catch (error) {
      console.error('Error fetching neighborhoods:', error);
      toast({
        title: "Error",
        description: "Failed to load neighborhoods",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const addNeighborhood = async () => {
    if (!newNeighborhood.trim()) return;

    try {
      console.log('Attempting to add neighborhood:', newNeighborhood.trim());
      
      // First, let's check the current user and their role
      const { data: { user } } = await supabase.auth.getUser();
      console.log('Current user:', user?.id);
      
      if (!user) {
        console.error('No authenticated user found');
        toast({
          title: "Error",
          description: "You must be logged in to add neighborhoods",
          variant: "destructive"
        });
        return;
      }

      // Check user role
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      console.log('User profile:', profile, 'Profile error:', profileError);

      if (profileError) {
        console.error('Error fetching user profile:', profileError);
      }

      const { error } = await supabase
        .from('neighborhoods')
        .insert([{ name: newNeighborhood.trim() }]);

      if (error) {
        console.error('Error adding neighborhood - Full error object:', error);
        console.error('Error code:', error.code);
        console.error('Error message:', error.message);
        console.error('Error details:', error.details);
        console.error('Error hint:', error.hint);
        throw error;
      }

      console.log('Neighborhood added successfully');
      toast({
        title: "Success",
        description: "Neighborhood added successfully"
      });
      
      setNewNeighborhood('');
      fetchNeighborhoods();
    } catch (error) {
      console.error('Error adding neighborhood:', error);
      toast({
        title: "Error",
        description: `Failed to add neighborhood: ${error.message || 'Unknown error'}`,
        variant: "destructive"
      });
    }
  };

  const updateNeighborhood = async (id: string) => {
    if (!editingName.trim()) return;

    try {
      const { error } = await supabase
        .from('neighborhoods')
        .update({ name: editingName.trim() })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Neighborhood updated successfully"
      });
      
      setEditingId(null);
      setEditingName('');
      fetchNeighborhoods();
    } catch (error) {
      console.error('Error updating neighborhood:', error);
      toast({
        title: "Error",
        description: "Failed to update neighborhood",
        variant: "destructive"
      });
    }
  };

  const deleteNeighborhood = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return;

    try {
      const { error } = await supabase
        .from('neighborhoods')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Neighborhood deleted successfully"
      });
      
      fetchNeighborhoods();
    } catch (error) {
      console.error('Error deleting neighborhood:', error);
      toast({
        title: "Error",
        description: "Failed to delete neighborhood",
        variant: "destructive"
      });
    }
  };

  const startEditing = (neighborhood: Neighborhood) => {
    setEditingId(neighborhood.id);
    setEditingName(neighborhood.name);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditingName('');
  };

  if (loading) {
    return <div className="text-center py-4">Loading neighborhoods...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Add New Neighborhood */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-end space-x-4">
            <div className="flex-1">
              <Label htmlFor="new-neighborhood">Add New Neighborhood</Label>
              <Input
                id="new-neighborhood"
                value={newNeighborhood}
                onChange={(e) => setNewNeighborhood(e.target.value)}
                placeholder="Enter neighborhood name"
                onKeyPress={(e) => e.key === 'Enter' && addNeighborhood()}
              />
            </div>
            <Button onClick={addNeighborhood} disabled={!newNeighborhood.trim()}>
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Existing Neighborhoods */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Existing Neighborhoods ({neighborhoods.length})</h3>
        
        {neighborhoods.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center text-gray-500">
              No neighborhoods found. Add one above to get started.
            </CardContent>
          </Card>
        ) : (
          neighborhoods.map((neighborhood) => (
            <Card key={neighborhood.id}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  {editingId === neighborhood.id ? (
                    <div className="flex items-center space-x-3 flex-1">
                      <Input
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && updateNeighborhood(neighborhood.id)}
                        className="flex-1"
                      />
                      <div className="flex items-center space-x-2">
                        <Button 
                          size="sm" 
                          onClick={() => updateNeighborhood(neighborhood.id)}
                          disabled={!editingName.trim()}
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
                        <h4 className="font-medium">{neighborhood.name}</h4>
                        <p className="text-sm text-gray-500">
                          Created: {new Date(neighborhood.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" onClick={() => startEditing(neighborhood)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive" 
                          onClick={() => deleteNeighborhood(neighborhood.id, neighborhood.name)}
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

export default NeighborhoodManager;
