
import { useEffect, useState } from 'react';
import { useInspection } from '@/contexts/InspectionContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import NeighborhoodSelection from '@/components/NeighborhoodSelection';
import InspectionHeader from '@/components/InspectionHeader';
import InspectionTabs from '@/components/InspectionTabs';
import { Button } from '@/components/ui/button';
import { Save, Send, ChevronLeft, ChevronRight } from 'lucide-react';

const Inspection = () => {
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const [currentCategory, setCurrentCategory] = useState<string>('');
  const { 
    currentInspection, 
    startNewInspection, 
    saveInspection, 
    submitInspection, 
    deleteInspection,
    canDeleteCurrentInspection 
  } = useInspection();
  const navigate = useNavigate();

  // Get categories for navigation
  const getCategories = () => {
    if (!currentInspection) return [];
    return [...new Set(currentInspection.items.map(item => item.category))];
  };

  const categories = getCategories();
  const currentCategoryIndex = categories.indexOf(currentCategory);
  const previousCategory = currentCategoryIndex > 0 ? categories[currentCategoryIndex - 1] : null;
  const nextCategory = currentCategoryIndex < categories.length - 1 ? categories[currentCategoryIndex + 1] : null;

  // Set initial category when inspection loads
  useEffect(() => {
    if (currentInspection && categories.length > 0 && !currentCategory) {
      setCurrentCategory(categories[0]);
    }
  }, [currentInspection, categories.length, currentCategory]);

  // Auto-save functionality
  useEffect(() => {
    if (!currentInspection || !autoSaveEnabled) return;
    
    const autoSaveInterval = setInterval(() => {
      saveInspection();
      console.log('Auto-saved inspection');
    }, 30000); // Auto-save every 30 seconds

    return () => clearInterval(autoSaveInterval);
  }, [currentInspection, autoSaveEnabled, saveInspection]);

  const handleManualSave = async () => {
    await saveInspection();
    toast({
      title: "Saved",
      description: "Inspection progress has been saved",
    });
  };

  const handleSubmit = async () => {
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

    await submitInspection();
    toast({
      title: "Inspection Submitted",
      description: "Report has been generated and emailed to stakeholders",
    });
    navigate('/reports');
  };

  const handleDelete = async () => {
    await deleteInspection();
    navigate('/');
  };

  const scrollToTop = () => {
    // Scroll to the very top of the page
    window.scrollTo({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
    
    // Also try document body scroll in case window scroll doesn't work
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const handlePreviousSection = () => {
    if (previousCategory) {
      setCurrentCategory(previousCategory);
      // Use setTimeout to ensure the category change happens first
      setTimeout(() => {
        scrollToTop();
      }, 100);
    }
  };

  const handleNextSection = () => {
    if (nextCategory) {
      setCurrentCategory(nextCategory);
      // Use setTimeout to ensure the category change happens first
      setTimeout(() => {
        scrollToTop();
      }, 100);
    }
  };

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    // Scroll to top when category changes
    setTimeout(() => {
      scrollToTop();
    }, 100);
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

  // Always show neighborhood selection if no current inspection
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
          canDelete={canDeleteCurrentInspection()}
        />

        <InspectionTabs 
          inspection={currentInspection} 
          currentCategory={currentCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Bottom Action Buttons */}
        <div className="mt-8 pt-6 border-t bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            {/* Previous Section Button */}
            <div className="flex-1">
              {previousCategory && (
                <Button 
                  onClick={handlePreviousSection}
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Center Buttons */}
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

            {/* Next Section Button */}
            <div className="flex-1 flex justify-end">
              {nextCategory && (
                <Button 
                  onClick={handleNextSection}
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
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
