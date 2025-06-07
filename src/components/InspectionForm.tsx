
import { useInspection } from '@/contexts/InspectionContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const scoreLabels = {
  0: 'Poor (0)',
  1: 'Below Average (1)', 
  2: 'Average (2)',
  3: 'Good (3)',
  4: 'Excellent (4)'
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
        const categoryWeight = categoryItems[0]?.weight || 0;
        
        // Group by subcategory
        const subcategories = [...new Set(categoryItems.map(item => item.subcategory))];
        
        return (
          <Card key={category}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{category}</CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    Weight: {categoryWeight}
                  </Badge>
                </div>
                <Badge variant="outline">
                  {completedItems}/{categoryItems.length} Complete
                </Badge>
              </div>
              <CardDescription>
                Score each item based on quality and workmanship (0-4 scale)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {subcategories.map((subcategory) => {
                  const subcategoryItems = categoryItems.filter(item => item.subcategory === subcategory);
                  
                  return (
                    <div key={subcategory} className="border-l-4 border-gray-200 pl-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">{subcategory}</h3>
                      
                      <div className="space-y-6">
                        {subcategoryItems.map((item) => (
                          <div key={item.id} className="border rounded-lg p-4 bg-gray-50">
                            <div className="mb-4">
                              <h4 className="font-medium text-gray-900 mb-2">{item.name}</h4>
                              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                                {[0, 1, 2, 3, 4].map((score) => (
                                  <Button
                                    key={score}
                                    variant={item.score === score ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => updateInspectionItem(item.id, score)}
                                    className={`text-xs h-auto py-2 px-3 ${item.score === score ? scoreColors[score as keyof typeof scoreColors] : ""}`}
                                    disabled={item.scoreDescriptions[score as keyof typeof item.scoreDescriptions] === 'No score'}
                                  >
                                    <div className="text-center">
                                      <div className="font-semibold">{scoreLabels[score as keyof typeof scoreLabels]}</div>
                                    </div>
                                  </Button>
                                ))}
                              </div>
                              
                              {/* Score descriptions */}
                              <div className="mt-3 space-y-1 text-xs">
                                {[0, 1, 2, 3, 4].map((score) => {
                                  const description = item.scoreDescriptions[score as keyof typeof item.scoreDescriptions];
                                  if (description === 'No score') return null;
                                  
                                  return (
                                    <div 
                                      key={score} 
                                      className={`p-2 rounded border-l-4 ${
                                        score === 0 ? 'border-red-400 bg-red-50' :
                                        score === 1 ? 'border-orange-400 bg-orange-50' :
                                        score === 2 ? 'border-yellow-400 bg-yellow-50' :
                                        score === 3 ? 'border-blue-400 bg-blue-50' :
                                        'border-green-400 bg-green-50'
                                      }`}
                                    >
                                      <span className="font-medium">{score}:</span> {description}
                                    </div>
                                  );
                                })}
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
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default InspectionForm;
