
-- Drop the existing policy first
DROP POLICY IF EXISTS "Admin can manage neighborhoods" ON public.neighborhoods;

-- Enable RLS on neighborhoods table (this might already be enabled, but it's safe to run)
ALTER TABLE public.neighborhoods ENABLE ROW LEVEL SECURITY;

-- Create a comprehensive policy for admins to manage neighborhoods
CREATE POLICY "Admin can manage neighborhoods"
ON public.neighborhoods
FOR ALL
USING (public.get_user_role_safe(auth.uid()) = 'admin')
WITH CHECK (public.get_user_role_safe(auth.uid()) = 'admin');

-- Also enable RLS on email_settings if not already enabled
ALTER TABLE public.email_settings ENABLE ROW LEVEL SECURITY;
