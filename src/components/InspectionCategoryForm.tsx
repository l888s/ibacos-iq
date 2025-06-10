
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

interface InspectionCategoryFormProps {
  category: string;
}

const InspectionCategoryForm = ({ category }: InspectionCategoryFormProps) => {
  const { currentInspection, updateItemScore } = useInspection();

  if (!currentInspection) return null;

  const categoryItems = currentInspection.items.filter(item => item.category === category);
  console.log(`=== CATEGORY FORM DEBUG for ${category} ===`);
  console.log('Category items:', categoryItems);
  console.log('Total category items:', categoryItems.length);
  
  const completedItems = categoryItems.filter(item => item.score !== null).length;
  const categoryWeight = categoryItems[0]?.weight || 0;
  
  // Group by subcategory
  const subcategories = [...new Set(categoryItems.map(item => item.subcategory))];
  console.log('Subcategories in category:', subcategories);
  
  // Debug each subcategory
  subcategories.forEach(subcategory => {
    const subcategoryItems = categoryItems.filter(item => item.subcategory === subcategory);
    console.log(`Subcategory ${subcategory}: ${subcategoryItems.length} items`);
    subcategoryItems.forEach(item => {
      console.log(`  - ${item.item} (ID: ${item.id})`);
    });
  });
  console.log('=== END CATEGORY FORM DEBUG ===');

  return (
    <div className="space-y-6">
      {/* Category Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{category}</CardTitle>
              <Badge variant="secondary" className="mt-2">
                Weight: {categoryWeight}
              </Badge>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2">
              {completedItems}/{categoryItems.length} Complete
            </Badge>
          </div>
          <CardDescription className="text-base">
            Score each item based on quality and workmanship (0-4 scale)
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Subcategories */}
      <div className="space-y-8">
        {subcategories.map((subcategory) => {
          const subcategoryItems = categoryItems.filter(item => item.subcategory === subcategory);
          
          return (
            <Card key={subcategory} className="border-l-4 border-blue-500">
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">{subcategory}</CardTitle>
                <CardDescription className="text-sm">
                  {subcategoryItems.length} items in this subcategory
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {subcategoryItems.map((inspectionItem) => (
                  <div key={inspectionItem.id} className="border rounded-lg p-6 bg-gray-50">
                    <div className="mb-4">
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">{inspectionItem.item}</h4>
                      <p className="text-sm text-gray-600">ID: {inspectionItem.id} | Weight: {inspectionItem.weight}</p>
                    </div>
                    
                    <div className="space-y-4">
                      {/* Score Buttons */}
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                        {[0, 1, 2, 3, 4].map((score) => {
                          const scoreKey = score as keyof typeof scoreColors;
                          const colorClass = scoreColors[scoreKey] || '';
                          const isDisabled = inspectionItem.scoreDescriptions?.[scoreKey] === 'No score';
                          
                          return (
                            <Button
                              key={score}
                              variant={inspectionItem.score === score ? "default" : "outline"}
                              size="sm"
                              onClick={() => updateItemScore(inspectionItem.id, score)}
                              className={`text-sm h-auto py-3 px-4 ${inspectionItem.score === score ? colorClass : ""}`}
                              disabled={isDisabled}
                            >
                              <div className="text-center">
                                <div className="font-semibold">{scoreLabels[scoreKey]}</div>
                              </div>
                            </Button>
                          );
                        })}
                      </div>
                      
                      {/* Score Descriptions */}
                      <div className="space-y-2 text-sm">
                        {[0, 1, 2, 3, 4].map((score) => {
                          const scoreKey = score as keyof typeof inspectionItem.scoreDescriptions;
                          const description = inspectionItem.scoreDescriptions?.[scoreKey];
                          if (!description || description === 'No score') return null;
                          
                          return (
                            <div 
                              key={score} 
                              className={`p-3 rounded border-l-4 ${
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
                      
                      {/* Current Score Display */}
                      {inspectionItem.score !== null && typeof inspectionItem.score === 'number' && (
                        <div className="mt-4">
                          <Badge 
                            variant="secondary"
                            className={`${scoreColors[inspectionItem.score as keyof typeof scoreColors]?.replace('hover:', '') || 'bg-gray-500'} text-white text-base px-4 py-2`}
                          >
                            Score: {inspectionItem.score} - {scoreLabels[inspectionItem.score as keyof typeof scoreLabels]}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default InspectionCategoryForm;
