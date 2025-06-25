
import { useCallback } from 'react';
import { Inspection, InspectionItem } from '@/types/inspection';
import { allInspectionItems } from '@/data/inspectionItems';
import { calculateWeightedAverageScore, calculateTotalScore } from '@/utils/inspectionCalculations';
import { downloadPDF } from '@/utils/pdfGenerator';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface UseInspectionActionsProps {
  currentInspection: Inspection | null;
  setCurrentInspection: (inspection: Inspection | null) => void;
  saveInspectionToStorage: (inspection: Inspection) => void;
  findExistingInspection: (neighborhood: string) => Inspection | undefined;
  getInspectionById: (inspectionId: string) => Inspection | undefined;
  deleteInspectionFromStorage: (inspectionId: string) => void;
}

export const useInspectionActions = ({
  currentInspection,
  setCurrentInspection,
  saveInspectionToStorage,
  findExistingInspection,
  getInspectionById,
  deleteInspectionFromStorage
}: UseInspectionActionsProps) => {
  
  const startNewInspection = useCallback((neighborhood: string, forceNew: boolean = false) => {
    console.log('Starting inspection for neighborhood:', neighborhood, 'forceNew:', forceNew);
    console.log('All inspection items available:', allInspectionItems.length);
    
    const existingInspection = findExistingInspection(neighborhood);
    
    // If there's an existing inspection and we're not forcing a new one, don't automatically load it
    if (existingInspection && !forceNew) {
      console.log('Found existing inspection, but not auto-loading:', existingInspection);
      // Don't automatically load - let the user choose
      return { hasExisting: true, existingInspection };
    }

    // If forcing new or no existing inspection, create a new one
    console.log('Creating new inspection with items from categories:', [...new Set(allInspectionItems.map(item => item.category))]);

    const newInspection: Inspection = {
      id: Date.now().toString(),
      neighborhood,
      date: new Date().toISOString(),
      status: 'in-progress',
      items: allInspectionItems.map(item => ({
        ...item,
        score: null
      })),
      totalScore: 0,
      maxScore: allInspectionItems.length * 4,
      averageScore: 0
    };
    
    console.log('New inspection created with items:', newInspection.items.length);
    console.log('Categories in new inspection:', [...new Set(newInspection.items.map(item => item.category))]);
    
    setCurrentInspection(newInspection);
    return { hasExisting: false, newInspection };
  }, [findExistingInspection, setCurrentInspection]);

  const continueExistingInspection = useCallback((neighborhood: string) => {
    const existingInspection = findExistingInspection(neighborhood);
    if (existingInspection) {
      console.log('Loading existing inspection:', existingInspection);
      setCurrentInspection(existingInspection);
      return true;
    }
    return false;
  }, [findExistingInspection, setCurrentInspection]);

  const updateItemScore = useCallback((itemId: string, score: number | string) => {
    if (!currentInspection) return;
    
    const updatedItems = currentInspection.items.map(item =>
      item.id === itemId ? { ...item, score } : item
    );
    
    const totalScore = calculateTotalScore(updatedItems);
    const averageScore = calculateWeightedAverageScore(updatedItems);
    
    setCurrentInspection({
      ...currentInspection,
      items: updatedItems,
      totalScore,
      averageScore
    });
  }, [currentInspection, setCurrentInspection]);

  const saveInspection = useCallback(() => {
    if (!currentInspection) return;
    saveInspectionToStorage(currentInspection);
  }, [currentInspection, saveInspectionToStorage]);

  const submitInspection = useCallback(async () => {
    if (!currentInspection) return;
    
    const completedInspection = {
      ...currentInspection,
      status: 'completed' as const
    };
    
    saveInspectionToStorage(completedInspection);
    
    // Generate and download PDF
    try {
      await downloadPDF(completedInspection);
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "PDF Error",
        description: "Failed to generate PDF, but inspection was saved",
        variant: "destructive"
      });
    }

    // Send email report
    try {
      console.log('Sending inspection report email...');
      const { data, error } = await supabase.functions.invoke('send-inspection-report', {
        body: { inspection: completedInspection }
      });

      if (error) {
        console.error('Error sending email:', error);
        toast({
          title: "Email Error",
          description: "Inspection saved but failed to send email report",
          variant: "destructive"
        });
      } else if (data?.success) {
        console.log('Email sent successfully to', data.recipients, 'recipients');
        toast({
          title: "Email Sent",
          description: `Report emailed to ${data.recipients} recipient(s)`,
        });
      } else {
        console.log('No email recipients configured');
        toast({
          title: "No Email Recipients",
          description: "Inspection saved but no email recipients are configured",
          variant: "default"
        });
      }
    } catch (error) {
      console.error('Error calling email function:', error);
      toast({
        title: "Email Error",
        description: "Inspection saved but failed to send email report",
        variant: "destructive"
      });
    }
    
    setCurrentInspection(null);
  }, [currentInspection, saveInspectionToStorage, setCurrentInspection]);

  const loadInspection = useCallback((inspectionId: string) => {
    const inspection = getInspectionById(inspectionId);
    if (inspection) {
      setCurrentInspection(inspection);
    }
  }, [getInspectionById, setCurrentInspection]);

  const deleteInspection = useCallback(() => {
    if (!currentInspection) return;
    
    // Only allow deletion of in-progress inspections
    if (currentInspection.status !== 'in-progress') {
      toast({
        title: "Cannot Delete",
        description: "Completed inspections cannot be deleted to maintain data integrity.",
        variant: "destructive"
      });
      return;
    }
    
    deleteInspectionFromStorage(currentInspection.id);
    setCurrentInspection(null);
    
    toast({
      title: "Inspection Deleted",
      description: "The incomplete inspection has been deleted.",
    });
  }, [currentInspection, deleteInspectionFromStorage, setCurrentInspection]);

  return {
    startNewInspection,
    continueExistingInspection,
    updateItemScore,
    saveInspection,
    submitInspection,
    loadInspection,
    deleteInspection
  };
};
