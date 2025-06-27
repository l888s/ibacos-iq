
-- Create inspections table to store all inspection data
CREATE TABLE public.inspections (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  neighborhood text NOT NULL,
  date timestamp with time zone NOT NULL,
  status text NOT NULL CHECK (status IN ('in-progress', 'completed')),
  total_score numeric DEFAULT 0,
  max_score numeric DEFAULT 0,
  average_score numeric DEFAULT 0,
  inspector_name text,
  inspector_email text,
  inspector_id uuid REFERENCES auth.users,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create inspection_items table to store individual item scores
CREATE TABLE public.inspection_items (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  inspection_id uuid NOT NULL REFERENCES public.inspections(id) ON DELETE CASCADE,
  item_id text NOT NULL,
  category text NOT NULL,
  subcategory text NOT NULL,
  item_name text NOT NULL,
  weight numeric NOT NULL,
  score text, -- Allow string for 'N/O' or numeric scores
  score_descriptions jsonb,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - all authenticated users can access all inspections
ALTER TABLE public.inspections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inspection_items ENABLE ROW LEVEL SECURITY;

-- Allow all authenticated users to view all inspections (shared access)
CREATE POLICY "All authenticated users can view inspections" 
  ON public.inspections 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Allow all authenticated users to create inspections
CREATE POLICY "All authenticated users can create inspections" 
  ON public.inspections 
  FOR INSERT 
  WITH CHECK (auth.role() = 'authenticated');

-- Allow all authenticated users to update inspections
CREATE POLICY "All authenticated users can update inspections" 
  ON public.inspections 
  FOR UPDATE 
  USING (auth.role() = 'authenticated');

-- Allow admin users and inspection creators to delete inspections
CREATE POLICY "Admins and creators can delete inspections" 
  ON public.inspections 
  FOR DELETE 
  USING (
    public.get_user_role_safe(auth.uid()) = 'admin' OR
    inspector_id = auth.uid()
  );

-- Similar policies for inspection_items
CREATE POLICY "All authenticated users can view inspection items" 
  ON public.inspection_items 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "All authenticated users can create inspection items" 
  ON public.inspection_items 
  FOR INSERT 
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "All authenticated users can update inspection items" 
  ON public.inspection_items 
  FOR UPDATE 
  USING (auth.role() = 'authenticated');

CREATE POLICY "All authenticated users can delete inspection items" 
  ON public.inspection_items 
  FOR DELETE 
  USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX idx_inspections_neighborhood ON public.inspections(neighborhood);
CREATE INDEX idx_inspections_status ON public.inspections(status);
CREATE INDEX idx_inspections_inspector ON public.inspections(inspector_id);
CREATE INDEX idx_inspection_items_inspection_id ON public.inspection_items(inspection_id);
CREATE INDEX idx_inspection_items_category ON public.inspection_items(category);
