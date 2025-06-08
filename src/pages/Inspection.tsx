import { useEffect, useState } from 'react';
import { useInspection } from '@/contexts/InspectionContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import NeighborhoodSelection from '@/components/NeighborhoodSelection';
import InspectionHeader from '@/components/InspectionHeader';
import InspectionAccordion from '@/components/InspectionAccordion';

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
        />

        <InspectionAccordion inspection={currentInspection} />
      </div>
    </div>
  );
};

export default Inspection;
