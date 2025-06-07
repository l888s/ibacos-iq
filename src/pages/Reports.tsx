
import { useInspection } from '@/contexts/InspectionContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download, Eye, Calendar, MapPin, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { toast } from '@/hooks/use-toast';

const Reports = () => {
  const { savedInspections, loadInspection } = useInspection();
  const navigate = useNavigate();

  const completedInspections = savedInspections.filter(i => i.status === 'completed');

  const handleViewReport = (inspectionId: string) => {
    loadInspection(inspectionId);
    navigate('/inspection');
  };

  const handleDownloadReport = (inspection: any) => {
    // Simulate report download
    toast({
      title: "Download Started",
      description: `Downloading report for ${inspection.neighborhood} inspection`,
    });
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 80) return 'text-blue-600';
    if (percentage >= 70) return 'text-yellow-600';
    if (percentage >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreBadgeColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-100 text-green-800';
    if (percentage >= 80) return 'bg-blue-100 text-blue-800';
    if (percentage >= 70) return 'bg-yellow-100 text-yellow-800';
    if (percentage >= 60) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Inspection Reports</h1>
          <p className="text-gray-600">View and download your completed inspection reports</p>
        </div>

        {completedInspections.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Reports Yet</h3>
              <p className="text-gray-600 mb-6">Complete your first inspection to see reports here</p>
              <Button onClick={() => navigate('/inspection')} className="bg-blue-600 hover:bg-blue-700">
                Start New Inspection
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedInspections.map((inspection) => {
              const percentage = Math.round((inspection.totalScore / inspection.maxScore) * 100);
              
              return (
                <Card key={inspection.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{inspection.neighborhood}</CardTitle>
                      <Badge className={getScoreBadgeColor(percentage)}>
                        {percentage}%
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(inspection.date).toLocaleDateString()}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Total Score</span>
                        <span className={`font-bold text-lg ${getScoreColor(percentage)}`}>
                          {inspection.totalScore}/{inspection.maxScore}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{inspection.items.length} items inspected</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewReport(inspection.id)}
                          className="flex-1"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDownloadReport(inspection)}
                          className="flex-1"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
