
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MapPin, Mail, Shield } from 'lucide-react';
import NeighborhoodManager from '@/components/admin/NeighborhoodManager';
import UserManager from '@/components/admin/UserManager';
import EmailSettingsManager from '@/components/admin/EmailSettingsManager';

const Admin = () => {
  const { isAuthenticated, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-xl">IQ</span>
          </div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (profile?.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <p className="text-gray-600">Manage system settings, users, and data</p>
        </div>

        <Tabs defaultValue="neighborhoods" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="neighborhoods" className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Neighborhoods</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Users</span>
            </TabsTrigger>
            <TabsTrigger value="email" className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Email Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="neighborhoods">
            <Card>
              <CardHeader>
                <CardTitle>Neighborhood Management</CardTitle>
                <CardDescription>
                  Add, edit, and remove neighborhoods for inspections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NeighborhoodManager />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  Manage user accounts and permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UserManager />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="email">
            <Card>
              <CardHeader>
                <CardTitle>Email Settings</CardTitle>
                <CardDescription>
                  Configure email recipients for inspection reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <EmailSettingsManager />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
