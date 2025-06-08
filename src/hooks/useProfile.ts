
import { useState, useCallback } from 'react';
import { User } from '@supabase/supabase-js';
import { UserProfile } from '@/types/auth';
import { authService } from '@/services/authService';

export const useProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const fetchProfile = useCallback(async (userId: string) => {
    const profileData = await authService.fetchProfile(userId);
    setProfile(profileData);
    return profileData;
  }, []);

  const updateProfile = useCallback(async (user: User | null, updates: Partial<UserProfile>) => {
    if (!user) return { error: 'Not authenticated' };
    
    const { error } = await authService.updateProfile(user.id, updates);
    
    if (!error) {
      // Refresh profile data
      const updatedProfile = await authService.fetchProfile(user.id);
      if (updatedProfile) {
        setProfile(updatedProfile);
      }
    }
    
    return { error };
  }, []);

  const clearProfile = useCallback(() => {
    setProfile(null);
  }, []);

  return {
    profile,
    setProfile,
    fetchProfile,
    updateProfile,
    clearProfile
  };
};
