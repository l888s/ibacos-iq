
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
  onStartInspection: (neighborhood: string) => void;
}

const NeighborhoodSelection = ({ onStartInspection }: NeighborhoodSelectionProps) => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const navigate = useNavigate();
  const { savedInspections } = useInspection();

  useEffect(() => {
    fetchNeighborhoods();
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

  const getNeighborhoodStatus = (neighborhood: string) => {
    console.log('Checking status for neighborhood:', neighborhood);
    console.log('Saved inspections:', savedInspections);
    
    const existingInspection = savedInspections.find(
      inspection => inspection.neighborhood === neighborhood && inspection.status === 'in-progress'
    );
    
    console.log('Existing in-progress inspection found:', existingInspection);
    return existingInspection ? 'in-progress' : 'available';
  };

  const handleStartInspection = () => {
    if (!selectedNeighborhood) {
      toast({
        title: "Error",
        description: "Please select a neighborhood first",
        variant: "destructive",
      });
      return;
    }

    const status = getNeighborhoodStatus(selectedNeighborhood);
    console.log('Neighborhood status:', status);
    
    if (status === 'in-progress') {
      toast({
        title: "Inspection Resumed",
        description: `Continuing existing inspection for ${selectedNeighborhood}`,
      });
    } else {
      toast({
        title: "Inspection Started",
        description: `New inspection for ${selectedNeighborhood} has been created`,
      });
    }
    
    onStartInspection(selectedNeighborhood);
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
                    This neighborhood has an unfinished inspection. Clicking "Continue Inspection" will resume the existing inspection.
                  </p>
                </div>
              )}
            </div>
            
            <Button 
              onClick={handleStartInspection}
              className="w-full bg-blue-600 hover:bg-blue-700"
              size="lg"
              disabled={!selectedNeighborhood}
            >
              {selectedNeighborhood && getNeighborhoodStatus(selectedNeighborhood) === 'in-progress' 
                ? 'Continue Inspection' 
                : 'Start Inspection'
              }
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NeighborhoodSelection;
