import { supabase } from '../lib/supabase';
import { Attribute } from '../types/pim';

export async function getAttributes(): Promise<Attribute[]> {
  const { data, error } = await supabase
    .from('attributes')
    .select('*')
    .order('name');

  if (error) throw error;
  return data;
}

export async function getAttributeById(id: string): Promise<Attribute> {
  const { data, error } = await supabase
    .from('attributes')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

export async function createAttribute(attribute: Omit<Attribute, 'id' | 'createdAt' | 'updatedAt'>): Promise<Attribute> {
  const { data, error } = await supabase
    .from('attributes')
    .insert([attribute])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateAttribute(id: string, updates: Partial<Attribute>): Promise<Attribute> {
  const { data, error } = await supabase
    .from('attributes')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteAttribute(id: string): Promise<void> {
  const { error } = await supabase
    .from('attributes')
    .delete()
    .eq('id', id);

  if (error) throw error;
}