
import { useEffect, useState } from 'react';
import { useInspection } from '@/contexts/InspectionContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import NeighborhoodSelection from '@/components/NeighborhoodSelection';
import InspectionHeader from '@/components/InspectionHeader';
import InspectionTabs from '@/components/InspectionTabs';
import { Button } from '@/components/ui/button';
import { Save, Send } from 'lucide-react';

const Inspection = () => {
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const { currentInspection, startNewInspection, saveInspection, submitInspection, deleteInspection } = useInspection();
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

  const handleDelete = () => {
    deleteInspection();
    toast({
      title: "Inspection Deleted",
      description: "The inspection has been permanently deleted",
    });
    navigate('/');
  };

  const getProgress = () => {
    if (!currentInspection) return 0;
    const completedItems = currentInspection.items.filter(item => item.score !== null).length;
    return Math.round((completedItems / currentInspection.items.length) * 100);
  };

  const isComplete = () => {
    if (!currentInspection) return false;
    return currentInspection.items.every(item => item.score !== null);
  };

  if (!currentInspection) {
    return (
      <>
        <Navigation />
        <NeighborhoodSelection onStartInspection={startNewInspection} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <InspectionHeader
          neighborhood={currentInspection.neighborhood}
          date={currentInspection.date}
          status={currentInspection.status}
          progress={getProgress()}
          onSave={handleManualSave}
          onSubmit={handleSubmit}
          onDelete={handleDelete}
          isComplete={isComplete()}
        />

        <InspectionTabs inspection={currentInspection} />

        {/* Bottom Action Buttons */}
        <div className="mt-8 pt-6 border-t bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={handleManualSave} variant="outline" size="lg">
              <Save className="h-4 w-4 mr-2" />
              Save Progress
            </Button>
            
            <Button 
              onClick={handleSubmit}
              className={`${isComplete() ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'}`}
              disabled={!isComplete() || currentInspection.status === 'completed'}
              size="lg"
            >
              <Send className="h-4 w-4 mr-2" />
              Submit Inspection
            </Button>
          </div>
          
          {!isComplete() && (
            <p className="text-center text-sm text-gray-600 mt-4">
              Complete all items to enable submission ({currentInspection.items.filter(item => item.score === null).length} items remaining)
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inspection;
