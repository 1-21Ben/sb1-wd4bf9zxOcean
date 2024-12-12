// Base product types
export interface ProductBase {
  id: string;
  sku: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  image: string;
  technicalDetails?: string;
  coverage?: string;
  application?: string;
  isActive: boolean;
}

// Price information
export interface ProductPrice {
  id: string;
  productId: string;
  basePrice: number;
  discountPrice?: number;
  discountStart?: string;
  discountEnd?: string;
  currency: string;
  lastUpdated: string;
  location: string;
}

// Stock information
export interface ProductStock {
  id: string;
  productId: string;
  locationId: string;
  quantity: number;
  reservedQuantity: number;
  minStockLevel: number;
  maxStockLevel: number;
  lastUpdated: string;
}

// Combined product information
export interface Product extends ProductBase {
  prices: ProductPrice[];
  stock: ProductStock[];
}

// SAP B1 specific types
export interface SAPB1ProductData {
  ItemCode: string;
  ItemName: string;
  ItemPrices: Array<{
    PriceList: number;
    Price: number;
    Currency: string;
  }>;
  WarehouseInfo: Array<{
    WarehouseCode: string;
    InStock: number;
    Committed: number;
  }>;
}