
-- Fix the get_user_role_safe function to work properly
CREATE OR REPLACE FUNCTION public.get_user_role_safe(user_id uuid)
RETURNS text
LANGUAGE sql
STABLE SECURITY DEFINER
AS $$
  SELECT role FROM public.profiles WHERE id = user_id;
$$;

-- Update RLS policies for neighborhoods to use the correct function
DROP POLICY IF EXISTS "Admins can insert neighborhoods" ON public.neighborhoods;
DROP POLICY IF EXISTS "Admins can update neighborhoods" ON public.neighborhoods;
DROP POLICY IF EXISTS "Admins can delete neighborhoods" ON public.neighborhoods;

CREATE POLICY "Admins can insert neighborhoods"
  ON public.neighborhoods
  FOR INSERT
  WITH CHECK (public.get_user_role_safe(auth.uid()) = 'admin');

CREATE POLICY "Admins can update neighborhoods"
  ON public.neighborhoods
  FOR UPDATE
  USING (public.get_user_role_safe(auth.uid()) = 'admin')
  WITH CHECK (public.get_user_role_safe(auth.uid()) = 'admin');

CREATE POLICY "Admins can delete neighborhoods"
  ON public.neighborhoods
  FOR DELETE
  USING (public.get_user_role_safe(auth.uid()) = 'admin');

-- Update RLS policies for email_settings
DROP POLICY IF EXISTS "Admins can view email settings" ON public.email_settings;
DROP POLICY IF EXISTS "Admins can create email settings" ON public.email_settings;
DROP POLICY IF EXISTS "Admins can update email settings" ON public.email_settings;
DROP POLICY IF EXISTS "Admins can delete email settings" ON public.email_settings;

CREATE POLICY "Admins can view email settings"
  ON public.email_settings
  FOR SELECT
  USING (public.get_user_role_safe(auth.uid()) = 'admin');

CREATE POLICY "Admins can create email settings"
  ON public.email_settings
  FOR INSERT
  WITH CHECK (public.get_user_role_safe(auth.uid()) = 'admin');

CREATE POLICY "Admins can update email settings"
  ON public.email_settings
  FOR UPDATE
  USING (public.get_user_role_safe(auth.uid()) = 'admin');

CREATE POLICY "Admins can delete email settings"
  ON public.email_settings
  FOR DELETE
  USING (public.get_user_role_safe(auth.uid()) = 'admin');
