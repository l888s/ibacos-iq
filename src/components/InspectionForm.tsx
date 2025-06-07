
import { useInspection } from '@/contexts/InspectionContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const scoreLabels = {
  0: 'Poor',
  1: 'Below Average', 
  2: 'Average',
  3: 'Good',
  4: 'Excellent'
};

const scoreColors = {
  0: 'bg-red-500 hover:bg-red-600',
  1: 'bg-orange-500 hover:bg-orange-600',
  2: 'bg-yellow-500 hover:bg-yellow-600', 
  3: 'bg-blue-500 hover:bg-blue-600',
  4: 'bg-green-500 hover:bg-green-600'
};

const InspectionForm = () => {
  const { currentInspection, updateInspectionItem } = useInspection();

  if (!currentInspection) return null;

  const categories = [...new Set(currentInspection.items.map(item => item.category))];

  return (
    <div className="space-y-8">
      {categories.map((category) => {
        const categoryItems = currentInspection.items.filter(item => item.category === category);
        const completedItems = categoryItems.filter(item => item.score !== null).length;
        
        return (
          <Card key={category}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{category}</CardTitle>
                <Badge variant="outline">
                  {completedItems}/{categoryItems.length} Complete
                </Badge>
              </div>
              <CardDescription>
                Score each item based on quality and workmanship
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {categoryItems.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {[0, 1, 2, 3, 4].map((score) => (
                        <Button
                          key={score}
                          variant={item.score === score ? "default" : "outline"}
                          size="sm"
                          onClick={() => updateInspectionItem(item.id, score)}
                          className={item.score === score ? scoreColors[score as keyof typeof scoreColors] : ""}
                        >
                          {score} - {scoreLabels[score as keyof typeof scoreLabels]}
                        </Button>
                      ))}
                    </div>
                    
                    {item.score !== null && (
                      <div className="mt-3">
                        <Badge 
                          variant="secondary"
                          className={`${scoreColors[item.score as keyof typeof scoreColors].replace('hover:', '')} text-white`}
                        >
                          Score: {item.score} - {scoreLabels[item.score as keyof typeof scoreLabels]}
                        </Badge>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default InspectionForm;
