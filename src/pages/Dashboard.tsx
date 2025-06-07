
import { useAuth } from '@/contexts/AuthContext';
import { useInspection } from '@/contexts/InspectionContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, FileText, TrendingUp, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const Dashboard = () => {
  const { user } = useAuth();
  const { savedInspections } = useInspection();
  const navigate = useNavigate();

  // Mock data for neighborhood scores (last 90 days) - using 0-4 scale
  const neighborhoodData = [
    { neighborhood: 'Downtown', avgScore: 2.1, userScore: 2.4 },
    { neighborhood: 'Riverside', avgScore: 1.9, userScore: 2.2 },
    { neighborhood: 'Hillcrest', avgScore: 2.8, userScore: 2.7 },
    { neighborhood: 'Oakwood', avgScore: 2.3, userScore: 2.6 },
    { neighborhood: 'Maple Grove', avgScore: 2.5, userScore: 2.8 },
  ];

  const recentInspections = savedInspections
    .filter(i => i.status === 'completed')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const totalInspections = savedInspections.filter(i => i.status === 'completed').length;
  const avgScore = savedInspections.length > 0 
    ? Number((savedInspections.reduce((sum, i) => sum + i.averageScore, 0) / savedInspections.length).toFixed(2))
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}
          </h1>
          <p className="text-gray-600">Here's your inspection overview for the last 90 days</p>
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
                  <p className="text-3xl font-bold text-gray-900">{avgScore}</p>
                  <p className="text-xs text-gray-500">out of 4.0</p>
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
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Neighborhood Performance Comparison</CardTitle>
            <CardDescription>
              Average scores across neighborhoods (last 90 days) vs your performance (Scale: 0-4.0)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={neighborhoodData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="neighborhood" />
                <YAxis domain={[0, 4]} />
                <Tooltip 
                  formatter={(value, name) => [
                    Number(value).toFixed(2), 
                    name === 'avgScore' ? 'Neighborhood Average' : 'Your Score'
                  ]}
                />
                <Bar dataKey="avgScore" fill="#3b82f6" name="avgScore" />
                <Bar dataKey="userScore" fill="#10b981" name="userScore" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

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
                          out of 4.0
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
