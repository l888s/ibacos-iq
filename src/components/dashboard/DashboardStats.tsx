
import { Card, CardContent } from '@/components/ui/card';
import { FileText, TrendingUp, Calendar } from 'lucide-react';

interface DashboardStatsProps {
  totalInspections: number;
  avgScore: number;
  recentInspectionsCount: number;
}

const DashboardStats = ({ totalInspections, avgScore, recentInspectionsCount }: DashboardStatsProps) => {
  return (
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
              <p className="text-3xl font-bold text-gray-900">{recentInspectionsCount}</p>
            </div>
            <Calendar className="h-8 w-8 text-purple-600" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
