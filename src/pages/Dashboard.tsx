
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardStats from '@/components/dashboard/DashboardStats';
import QuickActions from '@/components/dashboard/QuickActions';
import RecentInspections from '@/components/dashboard/RecentInspections';
import NeighborhoodChart from '@/components/dashboard/NeighborhoodChart';
import { useDashboardData } from '@/hooks/useDashboardData';
import { useInspection } from '@/contexts/InspectionContext';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { uploadCompletedInspections } from '@/utils/migrationHelper';

const Dashboard = () => {
  const { inspections, loading, neighborhoodData, recentInspections, totalInspections, avgScore } = useDashboardData();
  const { getAllCompletedInspections } = useInspection();
  const { profile } = useAuth();
  const navigate = useNavigate();
  const [showMigrationButton, setShowMigrationButton] = useState(true);
  const [isUploading, setIsUploading] = useState(false);

  const handleMigration = async () => {
    setIsUploading(true);
    try {
      await uploadCompletedInspections();
      // Only hide the button if we're confident the upload worked
      // We'll check localStorage to see if there are still inspections to upload
      const savedInspections = localStorage.getItem('inspections');
      if (savedInspections) {
        const inspections = JSON.parse(savedInspections);
        const completedInspections = inspections.filter((inspection: any) => 
          inspection.status === 'completed' && 
          (inspection.neighborhood === 'Chapel Run' || inspection.neighborhood === 'Spring Creek Trails')
        );
        
        // Only hide button if no more inspections to upload
        if (completedInspections.length === 0) {
          setShowMigrationButton(false);
        }
      }
    } catch (error) {
      console.error('Migration failed:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleStartNewInspection = () => {
    navigate('/inspection');
  };

  const handleViewReports = () => {
    navigate('/reports');
  };

  const stats = {
    totalInspections: inspections.length,
    completedInspections: getAllCompletedInspections().length,
    inProgressInspections: inspections.filter(i => i.status === 'in-progress').length,
    averageScore: inspections.length > 0 
      ? inspections.reduce((sum, inspection) => sum + (inspection.averageScore || 0), 0) / inspections.length 
      : 0
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <DashboardHeader userName={profile?.name || 'User'} />
        
        {showMigrationButton && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-blue-800">Migration Available</h3>
                <p className="text-sm text-blue-600">
                  Upload your completed Chapel Run and Spring Creek Trails inspections from local storage to the shared database.
                </p>
              </div>
              <Button 
                onClick={handleMigration} 
                disabled={isUploading}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
              >
                <Upload className="h-4 w-4 mr-2" />
                {isUploading ? 'Uploading...' : 'Upload Inspections'}
              </Button>
            </div>
          </div>
        )}

        <DashboardStats 
          totalInspections={totalInspections}
          avgScore={avgScore}
          recentInspectionsCount={recentInspections.length}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <NeighborhoodChart data={neighborhoodData} />
          </div>
          <div>
            <QuickActions 
              onStartNewInspection={handleStartNewInspection}
              onViewReports={handleViewReports}
            />
          </div>
        </div>
        
        <RecentInspections inspections={recentInspections} />
      </div>
    </div>
  );
};

export default Dashboard;
