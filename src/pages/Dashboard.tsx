
import { useAuth } from '@/contexts/AuthContext';
import { useInspection } from '@/contexts/InspectionContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, FileText, TrendingUp, MapPin, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const Dashboard = () => {
  const { user } = useAuth();
  const { savedInspections } = useInspection();
  const navigate = useNavigate();

  // Check if user is admin
  const isAdmin = user?.email === 'lewis.bedford@starlighthomes.com';

  // Generate neighborhood data from actual completed inspections
  const neighborhoodData = savedInspections
    .filter(i => i.status === 'completed')
    .reduce((acc, inspection) => {
      const existing = acc.find(item => item.neighborhood === inspection.neighborhood);
      if (existing) {
        existing.avgScore = (existing.avgScore + inspection.averageScore) / 2;
        existing.count++;
      } else {
        acc.push({
          neighborhood: inspection.neighborhood,
          avgScore: inspection.averageScore,
          count: 1
        });
      }
      return acc;
    }, [] as { neighborhood: string; avgScore: number; count: number }[])
    .slice(0, 10); // Show top 10 neighborhoods

  const recentInspections = savedInspections
    .filter(i => i.status === 'completed')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const totalInspections = savedInspections.filter(i => i.status === 'completed').length;
  const avgScore = savedInspections.length > 0 
    ? Number((savedInspections
        .filter(i => i.status === 'completed')
        .reduce((sum, i) => sum + i.averageScore, 0) / totalInspections).toFixed(2))
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {user?.name}
              </h1>
              <p className="text-gray-600">Here's your inspection overview for the last 90 days</p>
            </div>
            {isAdmin && (
              <Button 
                onClick={() => navigate('/admin')} 
                variant="outline"
                className="flex items-center space-x-2"
              >
                <Settings className="h-4 w-4" />
                <span>Admin Settings</span>
              </Button>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Inspections</p>
                  <p className="text-3xl font-bold text-gray-900">{totalInspections}</p>
                </div>
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Score</p>
                  <p className="text-3xl font-bold text-gray-900">{avgScore || 0}</p>
                  <p className="text-xs text-gray-500">out of 3.52</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-3xl font-bold text-gray-900">{recentInspections.length}</p>
                </div>
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        {neighborhoodData.length > 0 ? (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Neighborhood Performance</CardTitle>
              <CardDescription>
                Average scores across neighborhoods (completed inspections) - Scale: 0-3.52
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={neighborhoodData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="neighborhood" />
                  <YAxis domain={[0, 3.52]} />
                  <Tooltip 
                    formatter={(value) => [
                      Number(value).toFixed(2), 
                      'Average Score'
                    ]}
                  />
                  <Bar dataKey="avgScore" fill="#3b82f6" name="avgScore" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        ) : (
          <Card className="mb-8">
            <CardContent className="text-center py-12">
              <BarChart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Performance Data Yet</h3>
              <p className="text-gray-600 mb-6">Complete inspections to see neighborhood performance metrics</p>
            </CardContent>
          </Card>
        )}

        {/* Recent Inspections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Inspections</CardTitle>
              <CardDescription>Your latest completed audits</CardDescription>
            </CardHeader>
            <CardContent>
              {recentInspections.length > 0 ? (
                <div className="space-y-4">
                  {recentInspections.map((inspection) => (
                    <div key={inspection.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-gray-500" />
                        <div>
                          <p className="font-medium">{inspection.neighborhood}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(inspection.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">
                          {inspection.averageScore.toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500">
                          out of 3.52
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No completed inspections yet</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Start a new inspection or view reports</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={() => navigate('/inspection')} 
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                Start New Inspection
              </Button>
              <Button 
                onClick={() => navigate('/reports')} 
                variant="outline" 
                className="w-full"
                size="lg"
              >
                View All Reports
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
