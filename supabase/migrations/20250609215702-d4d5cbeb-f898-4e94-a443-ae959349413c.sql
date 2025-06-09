-- Enable RLS
ALTER TABLE public.email_settings ENABLE ROW LEVEL SECURITY;

-- Helper function
CREATE OR REPLACE FUNCTION public.is_admin(user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
AS $$
  SELECT role = 'admin'
  FROM public.profiles
  WHERE id = user_id
$$;

ALTER FUNCTION public.is_admin(uuid) OWNER TO postgres;

-- Policies
CREATE POLICY "Admins can view email settings"
  ON public.email_settings
  FOR SELECT
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can create email settings"
  ON public.email_settings
  FOR INSERT
  WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update email settings"
  ON public.email_settings
  FOR UPDATE
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete email settings"
  ON public.email_settings
  FOR DELETE
  USING (public.is_admin(auth.uid()));
