
-- Enable RLS on email_settings table if not already enabled
ALTER TABLE public.email_settings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow admins to select email settings
CREATE POLICY "Admins can view email settings" 
  ON public.email_settings 
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Create policy to allow admins to insert email settings
CREATE POLICY "Admins can create email settings" 
  ON public.email_settings 
  FOR INSERT 
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Create policy to allow admins to update email settings
CREATE POLICY "Admins can update email settings" 
  ON public.email_settings 
  FOR UPDATE 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Create policy to allow admins to delete email settings
CREATE POLICY "Admins can delete email settings" 
  ON public.email_settings 
  FOR DELETE 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );
