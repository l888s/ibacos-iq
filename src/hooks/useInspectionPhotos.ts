
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface PhotoData {
  [itemId: string]: string[];
}

export const useInspectionPhotos = (inspectionId: string | null) => {
  const [photos, setPhotos] = useState<PhotoData>({});
  const [loading, setLoading] = useState(false);

  const loadPhotos = async () => {
    if (!inspectionId) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('inspection_item_photos')
        .select('item_id, photo_url')
        .eq('inspection_id', inspectionId);

      if (error) {
        console.error('Error loading photos:', error);
        return;
      }

      const photosByItem: PhotoData = {};
      data?.forEach((photo) => {
        if (!photosByItem[photo.item_id]) {
          photosByItem[photo.item_id] = [];
        }
        photosByItem[photo.item_id].push(photo.photo_url);
      });

      setPhotos(photosByItem);
    } catch (error) {
      console.error('Error loading photos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPhotos();
  }, [inspectionId]);

  const addPhoto = (itemId: string, photoUrl: string) => {
    setPhotos(prev => ({
      ...prev,
      [itemId]: [...(prev[itemId] || []), photoUrl]
    }));
  };

  const removePhoto = (itemId: string, photoUrl: string) => {
    setPhotos(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || []).filter(url => url !== photoUrl)
    }));
  };

  const getPhotosForItem = (itemId: string): string[] => {
    return photos[itemId] || [];
  };

  return {
    photos,
    loading,
    addPhoto,
    removePhoto,
    getPhotosForItem,
    reloadPhotos: loadPhotos
  };
};
