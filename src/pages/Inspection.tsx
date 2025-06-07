
import { useState, useEffect } from 'react';
import { useInspection } from '@/contexts/InspectionContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';
import { Save, Send, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import InspectionForm from '@/components/InspectionForm';

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

const Inspection = () => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const { currentInspection, startNewInspection, saveInspection, submitInspection } = useInspection();
  const navigate = useNavigate();

  // Auto-save functionality
  useEffect(() => {
    if (!currentInspection || !autoSaveEnabled) return;
    
    const autoSaveInterval = setInterval(() => {
      saveInspection();
      console.log('Auto-saved inspection');
    }, 30000); // Auto-save every 30 seconds

    return () => clearInterval(autoSaveInterval);
  }, [currentInspection, autoSaveEnabled, saveInspection]);

  const handleStartInspection = () => {
    if (!selectedNeighborhood) {
      toast({
        title: "Error",
        description: "Please select a neighborhood first",
        variant: "destructive",
      });
      return;
    }
    startNewInspection(selectedNeighborhood);
    toast({
      title: "Inspection Started",
      description: `New inspection for ${selectedNeighborhood} has been created`,
    });
  };

  const handleManualSave = () => {
    saveInspection();
    toast({
      title: "Saved",
      description: "Inspection progress has been saved",
    });
  };

  const handleSubmit = () => {
    if (!currentInspection) return;
    
    const incompleteItems = currentInspection.items.filter(item => item.score === null);
    if (incompleteItems.length > 0) {
      toast({
        title: "Incomplete Inspection",
        description: `Please score all items before submitting. ${incompleteItems.length} items remaining.`,
        variant: "destructive",
      });
      return;
    }

    submitInspection();
    toast({
      title: "Inspection Submitted",
      description: "Report has been generated and emailed to stakeholders",
    });
    navigate('/reports');
  };

  const getProgress = () => {
    if (!currentInspection) return 0;
    const completedItems = currentInspection.items.filter(item => item.score !== null).length;
    return Math.round((completedItems / currentInspection.items.length) * 100);
  };

  if (!currentInspection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
        <Navigation />
        
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
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {currentInspection.neighborhood} Inspection
              </h1>
              <p className="text-gray-600">
                {new Date(currentInspection.date).toLocaleDateString()}
              </p>
            </div>
            <Badge variant={currentInspection.status === 'completed' ? 'default' : 'secondary'}>
              {currentInspection.status === 'completed' ? 'Completed' : 'In Progress'}
            </Badge>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm text-gray-600">{getProgress()}%</span>
            </div>
            <Progress value={getProgress()} className="w-full" />
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <Button onClick={handleManualSave} variant="outline">
              <Save className="h-4 w-4 mr-2" />
              Save Progress
            </Button>
            
            <Button 
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700"
              disabled={currentInspection.status === 'completed'}
            >
              <Send className="h-4 w-4 mr-2" />
              Submit Inspection
            </Button>
          </div>
        </div>

        <InspectionForm />
      </div>
    </div>
  );
};

export default Inspection;
