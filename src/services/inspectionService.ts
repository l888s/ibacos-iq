
import { supabase } from '@/integrations/supabase/client';
import { Inspection, InspectionItem } from '@/types/inspection';

export const inspectionService = {
  async getAllInspections(): Promise<Inspection[]> {
    try {
      const { data: inspections, error } = await supabase
        .from('inspections')
        .select(`
          *,
          inspection_items (*)
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching inspections:', error);
        return [];
      }

      return inspections?.map(inspection => ({
        id: inspection.id,
        neighborhood: inspection.neighborhood,
        date: inspection.date,
        status: inspection.status as 'in-progress' | 'completed',
        totalScore: inspection.total_score || 0,
        maxScore: inspection.max_score || 0,
        averageScore: inspection.average_score || 0,
        inspectorName: inspection.inspector_name,
        inspectorEmail: inspection.inspector_email,
        items: (inspection.inspection_items || []).map((item: any) => ({
          id: item.item_id,
          category: item.category,
          subcategory: item.subcategory,
          item: item.item_name,
          weight: item.weight,
          score: item.score === 'null' ? null : (isNaN(Number(item.score)) ? item.score : Number(item.score)),
          scoreDescriptions: item.score_descriptions || {
            0: '', 1: '', 2: '', 3: '', 4: ''
          }
        }))
      })) || [];
    } catch (error) {
      console.error('Error fetching inspections:', error);
      return [];
    }
  },

  async saveInspection(inspection: Inspection): Promise<boolean> {
    try {
      const { data: user } = await supabase.auth.getUser();
      
      // Upsert the inspection
      const { data: savedInspection, error: inspectionError } = await supabase
        .from('inspections')
        .upsert({
          id: inspection.id,
          neighborhood: inspection.neighborhood,
          date: inspection.date,
          status: inspection.status,
          total_score: inspection.totalScore,
          max_score: inspection.maxScore,
          average_score: inspection.averageScore,
          inspector_name: inspection.inspectorName,
          inspector_email: inspection.inspectorEmail,
          inspector_id: user.user?.id,
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (inspectionError) {
        console.error('Error saving inspection:', inspectionError);
        return false;
      }

      // Delete existing items for this inspection
      await supabase
        .from('inspection_items')
        .delete()
        .eq('inspection_id', inspection.id);

      // Insert all items
      const itemsToInsert = inspection.items.map(item => ({
        inspection_id: inspection.id,
        item_id: item.id,
        category: item.category,
        subcategory: item.subcategory,
        item_name: item.item,
        weight: item.weight,
        score: item.score?.toString() || 'null',
        score_descriptions: item.scoreDescriptions
      }));

      const { error: itemsError } = await supabase
        .from('inspection_items')
        .insert(itemsToInsert);

      if (itemsError) {
        console.error('Error saving inspection items:', itemsError);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error saving inspection:', error);
      return false;
    }
  },

  async deleteInspection(inspectionId: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('inspections')
        .delete()
        .eq('id', inspectionId);

      if (error) {
        console.error('Error deleting inspection:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error deleting inspection:', error);
      return false;
    }
  },

  async findExistingInProgressInspection(neighborhood: string): Promise<Inspection | null> {
    try {
      const { data, error } = await supabase
        .from('inspections')
        .select(`
          *,
          inspection_items (*)
        `)
        .eq('neighborhood', neighborhood)
        .eq('status', 'in-progress')
        .single();

      if (error || !data) {
        return null;
      }

      return {
        id: data.id,
        neighborhood: data.neighborhood,
        date: data.date,
        status: data.status as 'in-progress' | 'completed',
        totalScore: data.total_score || 0,
        maxScore: data.max_score || 0,
        averageScore: data.average_score || 0,
        inspectorName: data.inspector_name,
        inspectorEmail: data.inspector_email,
        items: (data.inspection_items || []).map((item: any) => ({
          id: item.item_id,
          category: item.category,
          subcategory: item.subcategory,
          item: item.item_name,
          weight: item.weight,
          score: item.score === 'null' ? null : (isNaN(Number(item.score)) ? item.score : Number(item.score)),
          scoreDescriptions: item.score_descriptions || {
            0: '', 1: '', 2: '', 3: '', 4: ''
          }
        }))
      };
    } catch (error) {
      console.error('Error finding existing inspection:', error);
      return null;
    }
  }
};
