
-- Create a storage bucket for inspection photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('inspection-photos', 'inspection-photos', true);

-- Create RLS policies for the inspection photos bucket
CREATE POLICY "Users can upload inspection photos" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'inspection-photos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can view inspection photos" ON storage.objects
FOR SELECT USING (
  bucket_id = 'inspection-photos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can update inspection photos" ON storage.objects
FOR UPDATE USING (
  bucket_id = 'inspection-photos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete inspection photos" ON storage.objects
FOR DELETE USING (
  bucket_id = 'inspection-photos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Create a table to track inspection item photos
CREATE TABLE public.inspection_item_photos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  inspection_id TEXT NOT NULL,
  item_id TEXT NOT NULL,
  photo_url TEXT NOT NULL,
  photo_path TEXT NOT NULL,
  uploaded_by UUID REFERENCES auth.users,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security for the photos table
ALTER TABLE public.inspection_item_photos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their inspection photos" ON public.inspection_item_photos
FOR SELECT USING (auth.uid() = uploaded_by);

CREATE POLICY "Users can upload their inspection photos" ON public.inspection_item_photos
FOR INSERT WITH CHECK (auth.uid() = uploaded_by);

CREATE POLICY "Users can update their inspection photos" ON public.inspection_item_photos
FOR UPDATE USING (auth.uid() = uploaded_by);

CREATE POLICY "Users can delete their inspection photos" ON public.inspection_item_photos
FOR DELETE USING (auth.uid() = uploaded_by);
