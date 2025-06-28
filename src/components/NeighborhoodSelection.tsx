
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
    console.log('Fetching neighborhoods from Supabase...');
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
      console.log('Neighborhoods loaded:', data);
      setNeighborhoods(data || []);
    }
  };

  const fetchInProgressInspections = async () => {
    console.log('Fetching in-progress inspections from Supabase...');
    const { data, error } = await supabase
      .from('inspections')
      .select('neighborhood, status, id')
      .eq('status', 'in-progress');
    
    if (error) {
      console.error('Error fetching in-progress inspections:', error);
    } else {
      console.log('In-progress inspections found:', data);
      const neighborhoods = new Set(data?.map(inspection => inspection.neighborhood) || []);
      setInProgressNeighborhoods(neighborhoods);
      console.log('In-progress neighborhoods set:', Array.from(neighborhoods));
    }
  };

  const getNeighborhoodStatus = (neighborhood: string) => {
    const status = inProgressNeighborhoods.has(neighborhood) ? 'in-progress' : 'available';
    console.log(`Status for ${neighborhood}:`, status, 'In-progress set:', Array.from(inProgressNeighborhoods));
    return status;
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

    console.log('Starting new inspection for:', selectedNeighborhood);
    console.log('Current status:', getNeighborhoodStatus(selectedNeighborhood));

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
      console.log('New inspection result:', result);
      
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

    console.log('Continuing inspection for:', selectedNeighborhood);

    try {
      const success = await continueExistingInspection(selectedNeighborhood);
      
      if (success) {
        toast({
          title: "Inspection Resumed",
          description: `Continuing existing inspection for ${selectedNeighborhood}`,
        });
      } else {
        console.log('No existing inspection found, refreshing list...');
        // Refresh the list in case the data is stale
        await fetchInProgressInspections();
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
    
    console.log('Deleting existing inspection for:', selectedNeighborhood);
    
    try {
      // Load the existing inspection to delete it
      const result = await onStartInspection(selectedNeighborhood, false);
      console.log('Existing inspection to delete:', result);
      
      if (result.existingInspection) {
        // Delete the inspection
        await deleteInspection();
        
        // Refresh the in-progress list
        await fetchInProgressInspections();
        
        toast({
          title: "Inspection Deleted",
          description: `Deleted in-progress inspection for ${selectedNeighborhood}`,
        });
      } else {
        console.log('No existing inspection found to delete');
        // Refresh the list anyway
        await fetchInProgressInspections();
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

  // Add a debug button to manually refresh the in-progress list
  const handleRefreshInProgress = async () => {
    console.log('Manually refreshing in-progress inspections...');
    await fetchInProgressInspections();
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
              
              {/* Debug button to refresh in-progress list */}
              <Button 
                onClick={handleRefreshInProgress}
                variant="outline"
                size="sm"
                className="mt-2"
              >
                Refresh Status
              </Button>
              
              {/* Warning text when a neighborhood with in-progress inspection is selected */}
              {selectedNeighborhood && getNeighborhoodStatus(selectedNeighborhood) === 'in-progress' && (
                <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-md">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-orange-800 mb-1">
                        Inspection In Progress
                      </h4>
                      <p className="text-sm text-orange-700 mb-3">
                        This neighborhood has an unfinished inspection that was started earlier. 
                        You must either continue working on the existing inspection or delete it 
                        before starting a new one.
                      </p>
                      <p className="text-xs text-orange-600">
                        <strong>Note:</strong> Deleting an in-progress inspection will permanently 
                        remove all work that has been completed so far.
                      </p>
                    </div>
                  </div>
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
