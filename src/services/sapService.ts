import { SAPB1ProductData } from '../types/product';
import { supabase } from '../lib/supabase';

const SAP_API_BASE = import.meta.env.VITE_SAP_API_URL;
const SAP_API_KEY = import.meta.env.VITE_SAP_API_KEY;

class SAPService {
  private headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${SAP_API_KEY}`,
  };

  async fetchProductData(itemCode: string): Promise<SAPB1ProductData> {
    const response = await fetch(`${SAP_API_BASE}/Items('${itemCode}')`, {
      headers: this.headers,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch product data from SAP B1');
    }

    return response.json();
  }

  async fetchBulkProductData(itemCodes: string[]): Promise<SAPB1ProductData[]> {
    const response = await fetch(`${SAP_API_BASE}/Items/Bulk`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ itemCodes }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch bulk product data from SAP B1');
    }

    return response.json();
  }
}

export const sapService = new SAPService();