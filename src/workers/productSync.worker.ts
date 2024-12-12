import { productSyncService } from '../services/productSyncService';

// Run daily price sync at midnight
const PRICE_SYNC_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours

// Run stock sync every 5 minutes
const STOCK_SYNC_INTERVAL = 5 * 60 * 1000; // 5 minutes

let activeSKUs: string[] = [];

// Initialize sync intervals
function initializeSyncIntervals() {
  // Daily price sync
  setInterval(async () => {
    try {
      await productSyncService.syncBulkProducts(activeSKUs);
      console.log('Daily price sync completed');
    } catch (error) {
      console.error('Daily price sync failed:', error);
    }
  }, PRICE_SYNC_INTERVAL);

  // Real-time stock sync
  setInterval(async () => {
    try {
      await productSyncService.syncBulkProducts(activeSKUs);
      console.log('Stock sync completed');
    } catch (error) {
      console.error('Stock sync failed:', error);
    }
  }, STOCK_SYNC_INTERVAL);
}

// Handle messages from the main thread
self.onmessage = async (event) => {
  const { type, data } = event.data;

  switch (type) {
    case 'INIT':
      activeSKUs = data.skus;
      initializeSyncIntervals();
      break;

    case 'UPDATE_SKUS':
      activeSKUs = data.skus;
      break;

    case 'SYNC_NOW':
      try {
        await productSyncService.syncBulkProducts(activeSKUs);
        self.postMessage({ type: 'SYNC_COMPLETE' });
      } catch (error) {
        self.postMessage({ type: 'SYNC_ERROR', error });
      }
      break;
  }
};