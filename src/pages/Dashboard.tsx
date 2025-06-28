
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardStats from '@/components/dashboard/DashboardStats';
import QuickActions from '@/components/dashboard/QuickActions';
import RecentInspections from '@/components/dashboard/RecentInspections';
import NeighborhoodChart from '@/components/dashboard/NeighborhoodChart';
import FileUploadMigration from '@/components/FileUploadMigration';
import { useDashboardData } from '@/hooks/useDashboardData';
import { useInspection } from '@/contexts/InspectionContext';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { inspections, loading, neighborhoodData, recentInspections, totalInspections, avgScore } = useDashboardData();
  const { getAllCompletedInspections } = useInspection();
  const { profile } = useAuth();
  const navigate = useNavigate();
  const [showMigrationButton, setShowMigrationButton] = useState(true);

  const handleMigrationSuccess = () => {
    setShowMigrationButton(false);
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
                <h3 className="text-sm font-medium text-blue-800">Upload Inspection Files</h3>
                <p className="text-sm text-blue-600">
                  Upload your completed Chapel Run and Spring Creek Trails inspection files (JSON format) to the shared database.
                </p>
              </div>
              <FileUploadMigration onSuccess={handleMigrationSuccess} />
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
