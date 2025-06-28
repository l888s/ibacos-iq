
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { inspectionService } from '@/services/inspectionService';
import { supabase } from '@/integrations/supabase/client';

interface FileUploadMigrationProps {
  onSuccess: () => void;
}

const FileUploadMigration: React.FC<FileUploadMigrationProps> = ({ onSuccess }) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);

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

      let uploadedCount = 0;
      let failedCount = 0;
      let totalProcessed = 0;

      for (const file of Array.from(files)) {
        try {
          const fileContent = await file.text();
          const inspectionData = JSON.parse(fileContent);
          
          // Handle both single inspection and array of inspections
          const inspections = Array.isArray(inspectionData) ? inspectionData : [inspectionData];
          
          for (const inspection of inspections) {
            // Filter for Chapel Run and Spring Creek Trails completed inspections
            if (inspection.status === 'completed' && 
                (inspection.neighborhood === 'Chapel Run' || inspection.neighborhood === 'Spring Creek Trails')) {
              
              totalProcessed++;
              console.log('Uploading inspection for:', inspection.neighborhood);
              
              const success = await inspectionService.uploadCompletedInspection(inspection);
              if (success) {
                uploadedCount++;
              } else {
                failedCount++;
              }
            }
          }
        } catch (fileError) {
          console.error('Error processing file:', file.name, fileError);
          failedCount++;
        }
      }

      if (totalProcessed === 0) {
        toast({
          title: "No Valid Inspections Found",
          description: "No completed inspections for Chapel Run or Spring Creek Trails found in the uploaded files",
        });
      } else if (uploadedCount > 0) {
        toast({
          title: "Inspections Uploaded",
          description: `Successfully uploaded ${uploadedCount} completed inspection(s) to the database${failedCount > 0 ? `. ${failedCount} failed to upload.` : ''}`,
        });
        onSuccess();
      } else {
        toast({
          title: "Upload Failed",
          description: "Failed to upload inspections to the database",
          variant: "destructive",
        });
      }

    } catch (error) {
      console.error('Error uploading files:', error);
      toast({
        title: "Upload Error",
        description: "An error occurred while processing the files",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      // Reset the input
      event.target.value = '';
    }
  };

  return (
    <div className="relative">
      <input
        type="file"
        multiple
        accept=".json"
        onChange={handleFileUpload}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        disabled={isUploading}
      />
      <Button 
        disabled={isUploading}
        className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
      >
        <Upload className="h-4 w-4 mr-2" />
        {isUploading ? 'Uploading...' : 'Upload Inspection Files'}
      </Button>
    </div>
  );
};

export default FileUploadMigration;
