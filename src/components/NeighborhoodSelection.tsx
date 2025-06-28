
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { useInspection } from '@/contexts/InspectionContext';
import { supabase } from '@/integrations/supabase/client';

interface Neighborhood {
  id: string;
  name: string;
}

interface NeighborhoodSelectionProps {
  onStartInspection: (neighborhood: string, forceNew?: boolean) => Promise<{ hasExisting: boolean; existingInspection?: any; newInspection?: any }>;
}

const NeighborhoodSelection = ({ onStartInspection }: NeighborhoodSelectionProps) => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const [inProgressNeighborhoods, setInProgressNeighborhoods] = useState<Set<string>>(new Set());
  const navigate = useNavigate();
  const { continueExistingInspection, deleteInspection } = useInspection();

  useEffect(() => {
    fetchNeighborhoods();
    fetchInProgressInspections();
  }, []);

  const fetchNeighborhoods = async () => {
    const { data, error } = await supabase
      .from('neighborhoods')
      .select('*')
      .order('name');
    
    if (error) {
      console.error('Failed to load neighborhoods:', error);
      toast({
        title: "Error",
        description: "Failed to load neighborhoods",
        variant: "destructive",
      });
    } else {
      setNeighborhoods(data || []);
    }
  };

  const fetchInProgressInspections = async () => {
    const { data, error } = await supabase
      .from('inspections')
      .select('neighborhood')
      .eq('status', 'in-progress');
    
    if (!error && data) {
      const neighborhoods = new Set(data.map(inspection => inspection.neighborhood));
      setInProgressNeighborhoods(neighborhoods);
      console.log('In-progress neighborhoods:', neighborhoods);
    }
  };

  const getNeighborhoodStatus = (neighborhood: string) => {
    return inProgressNeighborhoods.has(neighborhood) ? 'in-progress' : 'available';
  };

  const handleStartNewInspection = async () => {
    if (!selectedNeighborhood) {
      toast({
        title: "Error",
        description: "Please select a neighborhood first",
        variant: "destructive",
      });
      return;
    }

    // Check if there's already an in-progress inspection
    if (getNeighborhoodStatus(selectedNeighborhood) === 'in-progress') {
      toast({
        title: "Inspection Already In Progress",
        description: "This neighborhood has an active inspection. Please continue or delete the existing inspection first.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Start new inspection
      const result = await onStartInspection(selectedNeighborhood, true);
      
      toast({
        title: "New Inspection Started",
        description: `New inspection for ${selectedNeighborhood} has been created`,
      });
      
      // Refresh the in-progress list
      await fetchInProgressInspections();
    } catch (error) {
      console.error('Error starting new inspection:', error);
      toast({
        title: "Error",
        description: "Failed to start new inspection",
        variant: "destructive",
      });
    }
  };

  const handleContinueInspection = async () => {
    if (!selectedNeighborhood) {
      toast({
        title: "Error",
        description: "Please select a neighborhood first",
        variant: "destructive",
      });
      return;
    }

    try {
      const success = await continueExistingInspection(selectedNeighborhood);
      
      if (success) {
        toast({
          title: "Inspection Resumed",
          description: `Continuing existing inspection for ${selectedNeighborhood}`,
        });
      } else {
        toast({
          title: "Error",
          description: "No existing inspection found for this neighborhood",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error continuing inspection:', error);
      toast({
        title: "Error",
        description: "Failed to continue inspection",
        variant: "destructive",
      });
    }
  };

  const handleDeleteExistingInspection = async () => {
    if (!selectedNeighborhood) return;
    
    try {
      // Load the existing inspection to delete it
      const result = await onStartInspection(selectedNeighborhood, false);
      if (result.existingInspection) {
        // Delete the inspection
        await deleteInspection();
        
        // Refresh the in-progress list
        await fetchInProgressInspections();
        
        toast({
          title: "Inspection Deleted",
          description: `Deleted in-progress inspection for ${selectedNeighborhood}`,
        });
      }
    } catch (error) {
      console.error('Error deleting inspection:', error);
      toast({
        title: "Error",
        description: "Failed to delete inspection",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">New Inspection</h1>
          <p className="text-gray-600">Select a neighborhood to begin your inspection</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Neighborhood Selection</CardTitle>
            <CardDescription>
              Choose the neighborhood you'll be inspecting today
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Neighborhood
              </label>
              <Select value={selectedNeighborhood} onValueChange={setSelectedNeighborhood}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a neighborhood" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {neighborhoods.map((neighborhood) => {
                    const status = getNeighborhoodStatus(neighborhood.name);
                    return (
                      <SelectItem key={neighborhood.id} value={neighborhood.name}>
                        <div className="flex items-center gap-2">
                          <span>{neighborhood.name}</span>
                          {status === 'in-progress' && (
                            <div className="flex items-center gap-1 text-orange-600">
                              <AlertTriangle className="h-3 w-3" />
                              <span className="text-xs">In Progress</span>
                            </div>
                          )}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              
              {selectedNeighborhood && getNeighborhoodStatus(selectedNeighborhood) === 'in-progress' && (
                <div className="mt-2 p-3 bg-orange-50 border border-orange-200 rounded-md">
                  <div className="flex items-center gap-2 text-orange-800">
                    <AlertTriangle className="h-4 w-4" />
                    <span className="text-sm font-medium">Existing Inspection Found</span>
                  </div>
                  <p className="text-sm text-orange-700 mt-1">
                    This neighborhood has an unfinished inspection. You must continue the existing inspection or delete it before starting a new one.
                  </p>
                </div>
              )}
            </div>
            
            <div className="space-y-3">
              {selectedNeighborhood && getNeighborhoodStatus(selectedNeighborhood) === 'in-progress' ? (
                <>
                  <Button 
                    onClick={handleContinueInspection}
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    size="lg"
                  >
                    Continue Existing Inspection
                  </Button>
                  <Button 
                    onClick={handleDeleteExistingInspection}
                    variant="destructive"
                    className="w-full"
                    size="lg"
                  >
                    Delete Existing Inspection
                  </Button>
                </>
              ) : (
                <Button 
                  onClick={handleStartNewInspection}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  size="lg"
                  disabled={!selectedNeighborhood}
                >
                  Start New Inspection
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NeighborhoodSelection;
