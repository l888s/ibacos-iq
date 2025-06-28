
import { inspectionService } from '@/services/inspectionService';
import { toast } from '@/hooks/use-toast';

// Helper function to upload completed inspections from local storage
export const uploadCompletedInspections = async () => {
  try {
    // Check for completed inspections in localStorage
    const savedInspections = localStorage.getItem('inspections');
    if (!savedInspections) {
      console.log('No local inspections found');
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
    for (const inspection of completedInspections) {
      console.log('Uploading inspection for:', inspection.neighborhood);
      const success = await inspectionService.uploadCompletedInspection(inspection);
      if (success) {
        uploadedCount++;
      }
    }

    if (uploadedCount > 0) {
      toast({
        title: "Inspections Uploaded",
        description: `Successfully uploaded ${uploadedCount} completed inspection(s) to the database`,
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
