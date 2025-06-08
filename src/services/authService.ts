import { supabase } from '@/integrations/supabase/client';
import { UserProfile } from '@/types/auth';

export const authService = {
  async fetchProfile(userId: string): Promise<UserProfile | null> {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (error) {
        console.error('Error fetching profile:', error);
        return null;
      }
      
      return data;
    } catch (error) {
      console.error('Error in fetchProfile:', error);
      return null;
    }
  },

  async login(email: string, password: string, captchaToken?: string) {
    try {
      const authOptions: any = {
        email,
        password,
      };

      // Add captcha token if provided
      if (captchaToken) {
        authOptions.options = {
          captchaToken: captchaToken
        };
      }

      const { data, error } = await supabase.auth.signInWithPassword(authOptions);
      
      if (error) {
        return { error };
      }
      
      return { error: null };
    } catch (error) {
      return { error };
    }
  },

  async signUp(email: string, password: string, name: string, captchaToken?: string) {
    try {
      const authOptions: any = {
        email,
        password,
        options: {
          data: {
            name: name,
          },
          emailRedirectTo: `${window.location.origin}/`,
        },
      };

      // Add captcha token if provided
      if (captchaToken) {
        authOptions.options.captchaToken = captchaToken;
      }

      const { data, error } = await supabase.auth.signUp(authOptions);
      
      if (error) {
        return { error };
      }
      
      return { error: null };
    } catch (error) {
      return { error };
    }
  },

  async logout() {
    return await supabase.auth.signOut();
  },

  async updatePassword(newPassword: string) {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });
      
      if (error) {
        return { error };
      }
      
      return { error: null };
    } catch (error) {
      return { error };
    }
  },

  async updateProfile(userId: string, updates: Partial<UserProfile>) {
    try {
      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', userId);
      
      if (error) {
        return { error };
      }
      
      return { error: null };
    } catch (error) {
      return { error };
    }
  },

  onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabase.auth.onAuthStateChange(callback);
  },

  async getSession() {
    return await supabase.auth.getSession();
  }
};
