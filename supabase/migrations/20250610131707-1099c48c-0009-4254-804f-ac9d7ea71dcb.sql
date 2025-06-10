
-- Drop the existing policy and recreate with admin access
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

-- Create RLS policies for admin operations on neighborhoods
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

-- Recreate the profiles update policy to allow admin user updates
CREATE POLICY "Users can update their own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id OR public.get_user_role_safe(auth.uid()) = 'admin')
  WITH CHECK (auth.uid() = id OR public.get_user_role_safe(auth.uid()) = 'admin');

-- Ensure admin can insert new profiles when creating users
CREATE POLICY "Admins can insert new profiles"
  ON public.profiles
  FOR INSERT
  WITH CHECK (public.get_user_role_safe(auth.uid()) = 'admin');
