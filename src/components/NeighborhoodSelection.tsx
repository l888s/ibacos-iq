
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const neighborhoods = [
  'Downtown',
  'Riverside', 
  'Hillcrest',
  'Oakwood',
  'Maple Grove',
  'Pine Valley',
  'Cedar Heights',
  'Sunset Ridge'
];

interface NeighborhoodSelectionProps {
  onStartInspection: (neighborhood: string) => void;
}

const NeighborhoodSelection = ({ onStartInspection }: NeighborhoodSelectionProps) => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');
  const navigate = useNavigate();

  const handleStartInspection = () => {
    if (!selectedNeighborhood) {
      toast({
        title: "Error",
        description: "Please select a neighborhood first",
        variant: "destructive",
      });
      return;
    }
    onStartInspection(selectedNeighborhood);
    toast({
      title: "Inspection Started",
      description: `New inspection for ${selectedNeighborhood} has been created`,
    });
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
                  {neighborhoods.map((neighborhood) => (
                    <SelectItem key={neighborhood} value={neighborhood}>
                      {neighborhood}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              onClick={handleStartInspection}
              className="w-full bg-blue-600 hover:bg-blue-700"
              size="lg"
              disabled={!selectedNeighborhood}
            >
              Start Inspection
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NeighborhoodSelection;
