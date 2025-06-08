
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { Inspection } from '@/types/inspection';

interface RecentInspectionsProps {
  inspections: Inspection[];
}

const RecentInspections = ({ inspections }: RecentInspectionsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Inspections</CardTitle>
        <CardDescription>Your latest completed audits</CardDescription>
      </CardHeader>
      <CardContent>
        {inspections.length > 0 ? (
          <div className="space-y-4">
            {inspections.map((inspection) => (
              <div key={inspection.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">{inspection.neighborhood}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(inspection.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">
                    {inspection.averageScore.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">
                    out of 3.52
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No completed inspections yet</p>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentInspections;
