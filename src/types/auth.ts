
import { User, Session } from '@supabase/supabase-js';

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: string;
  first_login: boolean;
}

export interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  session: Session | null;
  login: (email: string, password: string) => Promise<{ error?: any }>;
  signUp: (email: string, password: string, name: string) => Promise<{ error?: any }>;
  logout: () => Promise<void>;
  updatePassword: (newPassword: string) => Promise<{ error?: any }>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<{ error?: any }>;
  isAuthenticated: boolean;
  loading: boolean;
}
