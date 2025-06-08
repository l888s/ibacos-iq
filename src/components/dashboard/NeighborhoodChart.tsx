
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart as BarChartIcon } from 'lucide-react';

interface NeighborhoodData {
  neighborhood: string;
  avgScore: number;
  count: number;
}

interface NeighborhoodChartProps {
  data: NeighborhoodData[];
}

const NeighborhoodChart = ({ data }: NeighborhoodChartProps) => {
  if (data.length === 0) {
    return (
      <Card className="mb-8">
        <CardContent className="text-center py-12">
          <BarChartIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Performance Data Yet</h3>
          <p className="text-gray-600 mb-6">Complete inspections to see neighborhood performance metrics</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Neighborhood Performance</CardTitle>
        <CardDescription>
          Average scores across neighborhoods (completed inspections) - Scale: 0-3.52
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="neighborhood" />
            <YAxis domain={[0, 3.52]} />
            <Tooltip 
              formatter={(value) => [
                Number(value).toFixed(2), 
                'Average Score'
              ]}
            />
            <Bar dataKey="avgScore" fill="#3b82f6" name="avgScore" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default NeighborhoodChart;
