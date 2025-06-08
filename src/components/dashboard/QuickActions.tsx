
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface QuickActionsProps {
  onStartNewInspection: () => void;
  onViewReports: () => void;
}

const QuickActions = ({ onStartNewInspection, onViewReports }: QuickActionsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Start a new inspection or view reports</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={onStartNewInspection} 
          className="w-full bg-blue-600 hover:bg-blue-700"
          size="lg"
        >
          Start New Inspection
        </Button>
        <Button 
          onClick={onViewReports} 
          variant="outline" 
          className="w-full"
          size="lg"
        >
          View All Reports
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
