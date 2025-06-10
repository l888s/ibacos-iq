
import { useInspection } from '@/contexts/InspectionContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download, Eye, Calendar, MapPin, FileText, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { toast } from '@/hooks/use-toast';
import { downloadPDF } from '@/utils/pdfGenerator';
import { getCategoryWeightedScores } from '@/utils/inspectionCalculations';

const Reports = () => {
  const { getAllInspections, loadInspection } = useInspection();
  const navigate = useNavigate();

  // Get all completed inspections from all users
  const allInspections = getAllInspections();
  const completedInspections = allInspections.filter(i => i.status === 'completed');

  const handleViewReport = (inspectionId: string) => {
    loadInspection(inspectionId);
    navigate('/inspection');
  };

  const handleDownloadReport = async (inspection: any) => {
    try {
      await downloadPDF(inspection);
      toast({
        title: "Download Started",
        description: `Downloading report for ${inspection.neighborhood} inspection`,
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error generating the PDF report",
        variant: "destructive",
      });
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 3.1) return 'text-green-600';
    if (score >= 2.6) return 'text-blue-600';
    if (score >= 2.2) return 'text-yellow-600';
    if (score >= 1.8) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreBadgeColor = (score: number) => {
    if (score >= 3.1) return 'bg-green-100 text-green-800';
    if (score >= 2.6) return 'bg-blue-100 text-blue-800';
    if (score >= 2.2) return 'bg-yellow-100 text-yellow-800';
    if (score >= 1.8) return 'bg-orange-100 text-orange-800';
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
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Inspection Reports</h1>
          <p className="text-gray-600">View and download completed inspection reports from all team members</p>
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
              const averageScore = inspection.averageScore || 0;
              const categoryScores = getCategoryWeightedScores(inspection.items);
              
              return (
                <Card key={inspection.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{inspection.neighborhood}</CardTitle>
                      <Badge className={getScoreBadgeColor(averageScore)}>
                        {averageScore.toFixed(2)}
                      </Badge>
                    </div>
                    <CardDescription className="flex flex-col space-y-1 text-sm">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(inspection.date).toLocaleDateString()}
                      </span>
                      {inspection.inspectorName && (
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {inspection.inspectorName}
                        </span>
                      )}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Weighted Average Score</span>
                        <span className={`font-bold text-lg ${getScoreColor(averageScore)}`}>
                          {averageScore.toFixed(2)}/3.52
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-700">Category Scores:</h4>
                        {Object.entries(categoryScores).slice(0, 3).map(([category, data]) => (
                          <div key={category} className="flex justify-between text-xs">
                            <span className="text-gray-600">{category}:</span>
                            <span className="font-medium">{data.score.toFixed(2)}</span>
                          </div>
                        ))}
                        {Object.keys(categoryScores).length > 3 && (
                          <div className="text-xs text-gray-500">
                            +{Object.keys(categoryScores).length - 3} more categories
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{inspection.items.filter(item => item.score !== null).length} items inspected</span>
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
