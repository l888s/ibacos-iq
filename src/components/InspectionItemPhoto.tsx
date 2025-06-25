
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Camera, Upload, X, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface InspectionItemPhotoProps {
  inspectionId: string;
  itemId: string;
  photos: string[];
  onPhotoAdded: (photoUrl: string) => void;
  onPhotoRemoved: (photoUrl: string) => void;
}

const InspectionItemPhoto = ({ 
  inspectionId, 
  itemId, 
  photos, 
  onPhotoAdded, 
  onPhotoRemoved 
}: InspectionItemPhotoProps) => {
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    await uploadPhoto(file);
  };

  const uploadPhoto = async (file: File) => {
    try {
      setUploading(true);

      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: "Error",
          description: "You must be logged in to upload photos",
          variant: "destructive"
        });
        return;
      }

      // Create unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/${inspectionId}/${itemId}/${Date.now()}.${fileExt}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('inspection-photos')
        .upload(fileName, file);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        toast({
          title: "Upload Failed",
          description: "Failed to upload photo. Please try again.",
          variant: "destructive"
        });
        return;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('inspection-photos')
        .getPublicUrl(fileName);

      // Save photo record to database
      const { error: dbError } = await supabase
        .from('inspection_item_photos')
        .insert({
          inspection_id: inspectionId,
          item_id: itemId,
          photo_url: publicUrl,
          photo_path: fileName,
          uploaded_by: user.id
        });

      if (dbError) {
        console.error('Database error:', dbError);
        // Clean up uploaded file if database insert fails
        await supabase.storage.from('inspection-photos').remove([fileName]);
        toast({
          title: "Save Failed",
          description: "Failed to save photo record. Please try again.",
          variant: "destructive"
        });
        return;
      }

      onPhotoAdded(publicUrl);
      toast({
        title: "Photo Uploaded",
        description: "Photo successfully added to inspection item",
      });

    } catch (error) {
      console.error('Error uploading photo:', error);
      toast({
        title: "Upload Error",
        description: "An unexpected error occurred while uploading",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemovePhoto = async (photoUrl: string) => {
    try {
      // Get the photo record to find the path
      const { data: photoRecord } = await supabase
        .from('inspection_item_photos')
        .select('photo_path')
        .eq('photo_url', photoUrl)
        .single();

      if (photoRecord) {
        // Remove from storage
        await supabase.storage
          .from('inspection-photos')
          .remove([photoRecord.photo_path]);

        // Remove from database
        await supabase
          .from('inspection_item_photos')
          .delete()
          .eq('photo_url', photoUrl);
      }

      onPhotoRemoved(photoUrl);
      toast({
        title: "Photo Removed",
        description: "Photo successfully removed from inspection item",
      });

    } catch (error) {
      console.error('Error removing photo:', error);
      toast({
        title: "Remove Failed",
        description: "Failed to remove photo. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="mt-4 space-y-3">
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="flex items-center gap-2"
        >
          {uploading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Camera className="h-4 w-4" />
          )}
          {uploading ? 'Uploading...' : 'Add Photo'}
        </Button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileSelect}
        className="hidden"
      />

      {photos.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photoUrl, index) => (
            <div key={index} className="relative group">
              <img
                src={photoUrl}
                alt={`Inspection photo ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg border"
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={() => handleRemovePhoto(photoUrl)}
                className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InspectionItemPhoto;
