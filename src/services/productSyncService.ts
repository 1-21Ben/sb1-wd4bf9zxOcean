import { sapService } from './sapService';
import { supabase } from '../lib/supabase';
import { SAPB1ProductData, ProductPrice, ProductStock } from '../types/product';
import { locationMapping } from '../config/locations';

export class ProductSyncService {
  private async updatePrices(sapData: SAPB1ProductData): Promise<void> {
    const { data: existingPrices, error: fetchError } = await supabase
      .from('product_prices')
      .select('*')
      .eq('sku', sapData.ItemCode);

    if (fetchError) throw fetchError;

    const updates = sapData.ItemPrices.map(price => ({
      sku: sapData.ItemCode,
      basePrice: price.Price,
      currency: price.Currency,
      location: locationMapping[price.PriceList],
      lastUpdated: new Date().toISOString(),
    }));

    const { error: upsertError } = await supabase
      .from('product_prices')
      .upsert(updates, {
        onConflict: 'sku,location',
      });

    if (upsertError) throw upsertError;
  }

  private async updateStock(sapData: SAPB1ProductData): Promise<void> {
    const updates = sapData.WarehouseInfo.map(warehouse => ({
      sku: sapData.ItemCode,
      locationId: warehouse.WarehouseCode,
      quantity: warehouse.InStock,
      reservedQuantity: warehouse.Committed,
      lastUpdated: new Date().toISOString(),
    }));

    const { error } = await supabase
      .from('product_stock')
      .upsert(updates, {
        onConflict: 'sku,locationId',
      });

    if (error) throw error;
  }

  async syncProduct(itemCode: string): Promise<void> {
    try {
      const sapData = await sapService.fetchProductData(itemCode);
      await Promise.all([
        this.updatePrices(sapData),
        this.updateStock(sapData),
      ]);
    } catch (error) {
      console.error(`Failed to sync product ${itemCode}:`, error);
      throw error;
    }
  }

  async syncBulkProducts(itemCodes: string[]): Promise<void> {
    try {
      const sapData = await sapService.fetchBulkProductData(itemCodes);
      await Promise.all(
        sapData.map(product => 
          Promise.all([
            this.updatePrices(product),
            this.updateStock(product),
          ])
        )
      );
    } catch (error) {
      console.error('Failed to sync bulk products:', error);
      throw error;
    }
  }
}

export const productSyncService = new ProductSyncService();