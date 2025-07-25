-- 1. Create a security definer function to get user role (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.get_user_role(user_id uuid)
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT role FROM public.profiles WHERE id = user_id;
$$;

-- Ensure the function is owned by a privileged role
ALTER FUNCTION public.get_user_role(uuid) OWNER TO postgres;

-- 2. Enable RLS on profiles table
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 3. Create RLS policies for the profiles table

-- Allow admins to access all profiles
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
CREATE POLICY "Admins can view all profiles" 
  ON public.profiles 
  FOR SELECT 
  USING (public.get_user_role(auth.uid()) = 'admin');

DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;
CREATE POLICY "Admins can update all profiles" 
  ON public.profiles 
  FOR UPDATE 
  USING (public.get_user_role(auth.uid()) = 'admin');

DROP POLICY IF EXISTS "Admins can delete all profiles" ON public.profiles;
CREATE POLICY "Admins can delete all profiles" 
  ON public.profiles 
  FOR DELETE 
  USING (public.get_user_role(auth.uid()) = 'admin');

DROP POLICY IF EXISTS "Admins can insert profiles" ON public.profiles;
CREATE POLICY "Admins can insert profiles" 
  ON public.profiles 
  FOR INSERT 
  WITH CHECK (public.get_user_role(auth.uid()) = 'admin');

-- Allow regular users to view and update their own profile
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
CREATE POLICY "Users can view their own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- 4. Enable RLS on app_users table
ALTER TABLE public.app_users ENABLE ROW LEVEL SECURITY;

-- Create admin policies for app_users table
DROP POLICY IF EXISTS "Admins can view all app_users" ON public.app_users;
CREATE POLICY "Admins can view all app_users" 
  ON public.app_users 
  FOR SELECT 
  USING (public.get_user_role(auth.uid()) = 'admin');

DROP POLICY IF EXISTS "Admins can update all app_users" ON public.app_users;
CREATE POLICY "Admins can update all app_users" 
  ON public.app_users 
  FOR UPDATE 
  USING (public.get_user_role(auth.uid()) = 'admin');

DROP POLICY IF EXISTS "Admins can delete all app_users" ON public.app_users;
CREATE POLICY "Admins can delete all app_users" 
  ON public.app_users 
  FOR DELETE 
  USING (public.get_user_role(auth.uid()) = 'admin');

DROP POLICY IF EXISTS "Admins can insert app_users" ON public.app_users;
CREATE POLICY "Admins can insert app_users" 
  ON public.app_users 
  FOR INSERT 
  WITH CHECK (public.get_user_role(auth.uid()) = 'admin');

-- 5. Enable RLS on neighborhoods table
ALTER TABLE public.neighborhoods ENABLE ROW LEVEL SECURITY;

-- Admin policies for neighborhoods
DROP POLICY IF EXISTS "Admins can manage neighborhoods" ON public.neighborhoods;
CREATE POLICY "Admins can manage neighborhoods"
  ON public.neighborhoods
  FOR ALL
  USING (public.get_user_role(auth.uid()) = 'admin');

-- Add insert policy with WITH CHECK for full protection
DROP POLICY IF EXISTS "Admins can insert neighborhoods" ON public.neighborhoods;
CREATE POLICY "Admins can insert neighborhoods"
  ON public.neighborhoods
  FOR INSERT
  WITH CHECK (public.get_user_role(auth.uid()) = 'admin');

-- 6. Update email_settings policies to use the security definer function
ALTER TABLE public.email_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins can view email settings" ON public.email_settings;
CREATE POLICY "Admins can view email settings" 
  ON public.email_settings 
  FOR SELECT 
  USING (public.get_user_role(auth.uid()) = 'admin');

DROP POLICY IF EXISTS "Admins can create email settings" ON public.email_settings;
CREATE POLICY "Admins can create email settings" 
  ON public.email_settings 
  FOR INSERT 
  WITH CHECK (public.get_user_role(auth.uid()) = 'admin');

DROP POLICY IF EXISTS "Admins can update email settings" ON public.email_settings;
CREATE POLICY "Admins can update email settings" 
  ON public.email_settings 
  FOR UPDATE 
  USING (public.get_user_role(auth.uid()) = 'admin');

DROP POLICY IF EXISTS "Admins can delete email settings" ON public.email_settings;
CREATE POLICY "Admins can delete email settings" 
  ON public.email_settings 
  FOR DELETE 
  USING (public.get_user_role(auth.uid()) = 'admin');

