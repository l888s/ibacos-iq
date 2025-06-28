
import { inspectionService } from '@/services/inspectionService';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

// Helper function to upload completed inspections from local storage
export const uploadCompletedInspections = async () => {
  try {
    // Check if user is authenticated first
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to upload inspections",
        variant: "destructive",
      });
      return;
    }

    // Check for completed inspections in localStorage
    const savedInspections = localStorage.getItem('inspections');
    if (!savedInspections) {
      console.log('No local inspections found');
      toast({
        title: "No Local Inspections Found",
        description: "No inspections found in local storage",
      });
      return;
    }

    const inspections = JSON.parse(savedInspections);
    const completedInspections = inspections.filter((inspection: any) => 
      inspection.status === 'completed' && 
      (inspection.neighborhood === 'Chapel Run' || inspection.neighborhood === 'Spring Creek Trails')
    );

    console.log('Found completed inspections to upload:', completedInspections);

    if (completedInspections.length === 0) {
      toast({
        title: "No Completed Inspections Found",
        description: "No completed inspections for Chapel Run or Spring Creek Trails found in local storage",
      });
      return;
    }

    let uploadedCount = 0;
    let failedCount = 0;
    
    for (const inspection of completedInspections) {
      console.log('Uploading inspection for:', inspection.neighborhood);
      try {
        const success = await inspectionService.uploadCompletedInspection(inspection);
        if (success) {
          uploadedCount++;
        } else {
          failedCount++;
        }
      } catch (error) {
        console.error('Error uploading inspection:', error);
        failedCount++;
      }
    }

    if (uploadedCount > 0) {
      toast({
        title: "Inspections Uploaded",
        description: `Successfully uploaded ${uploadedCount} completed inspection(s) to the database${failedCount > 0 ? `. ${failedCount} failed to upload.` : ''}`,
      });
    } else {
      toast({
        title: "Upload Failed",
        description: "Failed to upload inspections to the database",
        variant: "destructive",
      });
    }

  } catch (error) {
    console.error('Error uploading completed inspections:', error);
    toast({
      title: "Upload Error",
      description: "An error occurred while uploading inspections",
      variant: "destructive",
    });
  }
};
