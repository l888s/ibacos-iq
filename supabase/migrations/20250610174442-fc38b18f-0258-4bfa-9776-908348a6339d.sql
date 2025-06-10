
-- Drop existing email_settings policies that might be causing issues
DROP POLICY IF EXISTS "Admins can view email settings" ON public.email_settings;
DROP POLICY IF EXISTS "Admins can create email settings" ON public.email_settings;
DROP POLICY IF EXISTS "Admins can update email settings" ON public.email_settings;
DROP POLICY IF EXISTS "Admins can delete email settings" ON public.email_settings;
DROP POLICY IF EXISTS "Admin can manage email settings" ON public.email_settings;

-- Create a comprehensive policy for admins to manage email settings
CREATE POLICY "Admin can manage email settings"
ON public.email_settings
FOR ALL
USING (public.get_user_role_safe(auth.uid()) = 'admin')
WITH CHECK (public.get_user_role_safe(auth.uid()) = 'admin');
