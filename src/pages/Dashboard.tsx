
import { useAuth } from '@/contexts/AuthContext';
import { useInspection } from '@/contexts/InspectionContext';
import { useNavigate } from 'react-router-dom';
import { useDashboardData } from '@/hooks/useDashboardData';
import Navigation from '@/components/Navigation';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardStats from '@/components/dashboard/DashboardStats';
import NeighborhoodChart from '@/components/dashboard/NeighborhoodChart';
import RecentInspections from '@/components/dashboard/RecentInspections';
import QuickActions from '@/components/dashboard/QuickActions';

const Dashboard = () => {
  const { user, profile } = useAuth();
  const { getAllInspections, setCurrentInspection } = useInspection();
  const navigate = useNavigate();

  // Get all inspections from all users
  const allInspections = getAllInspections();
  const { neighborhoodData, recentInspections, totalInspections, avgScore } = useDashboardData(allInspections);

  const handleStartNewInspection = () => {
    // Clear any current inspection before navigating
    setCurrentInspection(null);
    navigate('/inspection');
  };

  const handleViewReports = () => {
    navigate('/reports');
  };

  const handleAdminClick = () => {
    navigate('/admin');
  };

  console.log('Dashboard - Current user:', user?.email);
  console.log('Dashboard - Current profile:', profile);
  console.log('Dashboard - Is admin?', profile?.role === 'admin');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <DashboardHeader 
          userName={profile?.name || user?.email || 'User'}
        />

        <DashboardStats 
          totalInspections={totalInspections}
          avgScore={avgScore}
          recentInspectionsCount={recentInspections.length}
        />

        <NeighborhoodChart data={neighborhoodData} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RecentInspections inspections={recentInspections} />
          <QuickActions 
            onStartNewInspection={handleStartNewInspection}
            onViewReports={handleViewReports}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
