-- 1. Drop all policies that used the old get_user_role functions

-- app_users
DROP POLICY IF EXISTS "Only admins can view app_users" ON public.app_users;
DROP POLICY IF EXISTS "Only admins can insert app_users" ON public.app_users;
DROP POLICY IF EXISTS "Only admins can update app_users" ON public.app_users;
DROP POLICY IF EXISTS "Only admins can delete app_users" ON public.app_users;
DROP POLICY IF EXISTS "Admins can view all app_users" ON public.app_users;
DROP POLICY IF EXISTS "Admins can update all app_users" ON public.app_users;
DROP POLICY IF EXISTS "Admins can delete all app_users" ON public.app_users;
DROP POLICY IF EXISTS "Admins can insert app_users" ON public.app_users;
DROP POLICY IF EXISTS "Admins can manage app_users" ON public.app_users;
DROP POLICY IF EXISTS "Admins can select app_users" ON public.app_users;

-- email_settings
DROP POLICY IF EXISTS "Only admins can manage email_settings" ON public.email_settings;
DROP POLICY IF EXISTS "Admins can view email settings" ON public.email_settings;
DROP POLICY IF EXISTS "Admins can create email settings" ON public.email_settings;
DROP POLICY IF EXISTS "Admins can update email settings" ON public.email_settings;
DROP POLICY IF EXISTS "Admins can delete email settings" ON public.email_settings;
DROP POLICY IF EXISTS "Admins can manage email settings" ON public.email_settings;
DROP POLICY IF EXISTS "Admins can select email settings" ON public.email_settings;
DROP POLICY IF EXISTS "Admins can insert email settings" ON public.email_settings;

-- neighborhoods
DROP POLICY IF EXISTS "Only admins can manage neighborhoods" ON public.neighborhoods;
DROP POLICY IF EXISTS "Admins can manage neighborhoods" ON public.neighborhoods;
DROP POLICY IF EXISTS "Users can view neighborhoods" ON public.neighborhoods;

-- profiles
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can delete all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can insert profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can manage all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can select all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;

-- 2. Drop old role functions
DROP FUNCTION IF EXISTS public.get_user_role(uuid) CASCADE;
DROP FUNCTION IF EXISTS public.get_user_role_safe(uuid) CASCADE;
DROP FUNCTION IF EXISTS public.get_current_user_role() CASCADE;

-- 3. Create the new role function
CREATE OR REPLACE FUNCTION public.get_user_role_safe(user_id uuid)
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT role FROM public.profiles WHERE id = user_id;
$$;

-- Make sure the function can bypass RLS
ALTER FUNCTION public.get_user_role_safe(uuid) OWNER TO postgres;

-- 4. Recreate RLS policies using the new helper function

-- EMAIL_SETTINGS
CREATE POLICY "Admins can select email settings"
  ON public.email_settings
  FOR SELECT
  USING (public.get_user_role_safe(auth.uid()) = 'admin');

CREATE POLICY "Admins can insert email settings"
  ON public.email_settings
  FOR INSERT
  WITH CHECK (public.get_user_role_safe(auth.uid()) = 'admin');

CREATE POLICY "Admins can update email settings"
  ON public.email_settings
  FOR UPDATE
  USING (public.get_user_role_safe(auth.uid()) = 'admin')
  WITH CHECK (public.get_user_role_safe(auth.uid()) = 'admin');

CREATE POLICY "Admins can delete email settings"
  ON public.email_settings
  FOR DELETE
  USING (public.get_user_role_safe(auth.uid()) = 'admin');

-- APP_USERS
CREATE POLICY "Admins can select app_users"
  ON public.app_users
  FOR SELECT
  USING (public.get_user_role_safe(auth.uid()) = 'admin');

CREATE POLICY "Admins can insert app_users"
  ON public.app_users
  FOR INSERT
  WITH CHECK (public.get_user_role_safe(auth.uid()) = 'admin');

CREATE POLICY "Admins can update app_users"
  ON public.app_users
  FOR UPDATE
  USING (public.get_user_role_safe(auth.uid()) = 'admin')
  WITH CHECK (public.get_user_role_safe(auth.uid()) = 'admin');

CREATE POLICY "Admins can delete app_users"
  ON public.app_users
  FOR DELETE
  USING (public.get_user_role_safe(auth.uid()) = 'admin');

-- PROFILES
CREATE POLICY "Users can view own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Admins can select all profiles"
  ON public.profiles
  FOR SELECT
  USING (public.get_user_role_safe(auth.uid()) = 'admin');

CREATE POLICY "Admins can insert profiles"
  ON public.profiles
  FOR INSERT
  WITH CHECK (public.get_user_role_safe(auth.uid()) = 'admin');

CREATE POLICY "Admins can update profiles"
  ON public.profiles
  FOR UPDATE
  USING (public.get_user_role_safe(auth.uid()) = 'admin')
  WITH CHECK (public.get_user_role_safe(auth.uid()) = 'admin');

CREATE POLICY "Admins can delete profiles"
  ON public.profiles
  FOR DELETE
  USING (public.get_user_role_safe(auth.uid()) = 'admin');

-- NEIGHBORHOODS
CREATE POLICY "Admins can manage neighborhoods"
  ON public.neighborhoods
  FOR ALL
  USING (public.get_user_role_safe(auth.uid()) = 'admin')
  WITH CHECK (public.get_user_role_safe(auth.uid()) = 'admin');

-- Optional: allow users to view neighborhoods
CREATE POLICY "Users can view neighborhoods"
  ON public.neighborhoods
  FOR SELECT
  USING (true); -- or limit to certain neighborhoods by user_id if needed

