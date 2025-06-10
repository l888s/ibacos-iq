
-- Update the handle_new_user function to include the new admin user
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
BEGIN
  INSERT INTO public.profiles (id, email, name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    CASE 
      WHEN NEW.email = 'lewis.bedford@starlighthomes.com' THEN 'admin'
      WHEN NEW.email = 'admin@example.com' THEN 'admin'
      ELSE 'inspector'
    END
  );
  RETURN NEW;
END;
$function$;
