
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

interface DashboardHeaderProps {
  userName: string;
  isAdmin: boolean;
  onAdminClick: () => void;
}

const DashboardHeader = ({ userName, isAdmin, onAdminClick }: DashboardHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {userName}
          </h1>
          <p className="text-gray-600">Here's your inspection overview for the last 90 days</p>
        </div>
        {isAdmin && (
          <Button 
            onClick={onAdminClick} 
            variant="outline"
            className="flex items-center space-x-2"
          >
            <Settings className="h-4 w-4" />
            <span>Admin Settings</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
