
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Save, Send, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface InspectionHeaderProps {
  neighborhood: string;
  date: string;
  status: 'in-progress' | 'completed';
  progress: number;
  onSave: () => void;
  onSubmit: () => void;
}

const InspectionHeader = ({ 
  neighborhood, 
  date, 
  status, 
  progress, 
  onSave, 
  onSubmit 
}: InspectionHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="mb-8">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/')}
        className="mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Dashboard
      </Button>
      
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {neighborhood} Inspection
          </h1>
          <p className="text-gray-600">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
        <Badge variant={status === 'completed' ? 'default' : 'secondary'}>
          {status === 'completed' ? 'Completed' : 'In Progress'}
        </Badge>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Progress</span>
          <span className="text-sm text-gray-600">{progress}%</span>
        </div>
        <Progress value={progress} className="w-full" />
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <Button onClick={onSave} variant="outline">
          <Save className="h-4 w-4 mr-2" />
          Save Progress
        </Button>
        
        <Button 
          onClick={onSubmit}
          className="bg-green-600 hover:bg-green-700"
          disabled={status === 'completed'}
        >
          <Send className="h-4 w-4 mr-2" />
          Submit Inspection
        </Button>
      </div>
    </div>
  );
};

export default InspectionHeader;
