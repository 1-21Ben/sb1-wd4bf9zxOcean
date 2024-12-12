import { supabase } from '../lib/supabase';
import { PIMProduct, ProductStatus } from '../types/pim';
import { sapService } from './sapService';

export async function getProducts(filters?: {
  status?: ProductStatus;
  categoryId?: string;
  search?: string;
}): Promise<PIMProduct[]> {
  let query = supabase.from('pim_products').select('*');

  if (filters?.status) {
    query = query.eq('status', filters.status);
  }

  if (filters?.categoryId) {
    query = query.contains('categoryIds', [filters.categoryId]);
  }

  if (filters?.search) {
    query = query.or(`name.ilike.%${filters.search}%,sku.ilike.%${filters.search}%`);
  }

  const { data, error } = await query.order('updatedAt', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getProductById(id: string): Promise<PIMProduct> {
  const { data, error } = await supabase
    .from('pim_products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

export async function createProduct(product: Omit<PIMProduct, 'id' | 'createdAt' | 'updatedAt'>): Promise<PIMProduct> {
  const { data, error } = await supabase
    .from('pim_products')
    .insert([product])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateProduct(id: string, updates: Partial<PIMProduct>): Promise<PIMProduct> {
  const { data, error } = await supabase
    .from('pim_products')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function discontinueProduct(id: string): Promise<void> {
  const { error } = await supabase
    .from('pim_products')
    .update({ status: 'discontinued', updatedAt: new Date().toISOString() })
    .eq('id', id);

  if (error) throw error;
}

export async function syncWithSAP(productId: string): Promise<void> {
  const { data: product, error } = await supabase
    .from('pim_products')
    .select('*')
    .eq('id', productId)
    .single();

  if (error) throw error;

  try {
    const sapData = await sapService.fetchProductData(product.sku);
    // Update product with SAP data
    await updateProduct(productId, {
      name: sapData.ItemName,
      // Add other SAP fields mapping
    });
  } catch (error) {
    console.error('Failed to sync with SAP:', error);
    throw error;
  }
}