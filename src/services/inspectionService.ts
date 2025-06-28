
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
      console.log('=== SAVING INSPECTION ===');
      console.log('Inspection data:', inspection);
      console.log('Inspection ID type:', typeof inspection.id);
      console.log('Inspection ID value:', inspection.id);
      console.log('Is UUID format?', /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(inspection.id));
      
      // Check if the ID looks like a timestamp and regenerate if needed
      if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(inspection.id)) {
        console.log('Invalid UUID detected, generating new one...');
        inspection.id = crypto.randomUUID();
        console.log('New UUID generated:', inspection.id);
      }
      
      const { data: user } = await supabase.auth.getUser();
      console.log('Current user:', user.user?.id, user.user?.email);
      
      // Prepare inspection data for database
      const inspectionData = {
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
      };
      
      console.log('Prepared inspection data for DB:', inspectionData);

      // Upsert the inspection
      const { data: savedInspection, error: inspectionError } = await supabase
        .from('inspections')
        .upsert(inspectionData)
        .select()
        .single();

      if (inspectionError) {
        console.error('Error saving inspection - Details:', {
          error: inspectionError,
          code: inspectionError.code,
          message: inspectionError.message,
          details: inspectionError.details,
          hint: inspectionError.hint
        });
        return false;
      }
      
      console.log('Inspection saved successfully:', savedInspection);

      // Delete existing items for this inspection
      console.log('Deleting existing inspection items for inspection:', inspection.id);
      const { error: deleteError } = await supabase
        .from('inspection_items')
        .delete()
        .eq('inspection_id', inspection.id);
        
      if (deleteError) {
        console.error('Error deleting existing inspection items:', deleteError);
      }

      // Prepare items data for database
      const itemsToInsert = inspection.items.map(item => {
        const itemData = {
          inspection_id: inspection.id,
          item_id: item.id,
          category: item.category,
          subcategory: item.subcategory,
          item_name: item.item,
          weight: item.weight,
          score: item.score?.toString() || 'null',
          score_descriptions: item.scoreDescriptions
        };
        console.log('Prepared item data:', itemData);
        return itemData;
      });

      console.log('Inserting', itemsToInsert.length, 'inspection items');

      // Insert all items
      const { error: itemsError } = await supabase
        .from('inspection_items')
        .insert(itemsToInsert);

      if (itemsError) {
        console.error('Error saving inspection items - Details:', {
          error: itemsError,
          code: itemsError.code,
          message: itemsError.message,
          details: itemsError.details,
          hint: itemsError.hint,
          itemsCount: itemsToInsert.length
        });
        return false;
      }

      console.log('All inspection items saved successfully');
      console.log('=== INSPECTION SAVE COMPLETE ===');
      return true;
    } catch (error) {
      console.error('Error saving inspection - Caught exception:', error);
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
  },

  // Helper method to upload completed inspections from local storage
  async uploadCompletedInspection(inspectionData: any): Promise<boolean> {
    try {
      console.log('Uploading completed inspection:', inspectionData);
      
      // Create the inspection with a new UUID but preserve the original data
      const inspection: Inspection = {
        id: crypto.randomUUID(), // Generate new UUID for database
        neighborhood: inspectionData.neighborhood,
        date: inspectionData.date,
        status: 'completed',
        totalScore: inspectionData.totalScore || 0,
        maxScore: inspectionData.maxScore || 0,
        averageScore: inspectionData.averageScore || 0,
        inspectorName: inspectionData.inspectorName,
        inspectorEmail: inspectionData.inspectorEmail,
        items: inspectionData.items || []
      };

      const success = await this.saveInspection(inspection);
      if (success) {
        console.log('Successfully uploaded completed inspection for', inspectionData.neighborhood);
      }
      return success;
    } catch (error) {
      console.error('Error uploading completed inspection:', error);
      return false;
    }
  }
};
