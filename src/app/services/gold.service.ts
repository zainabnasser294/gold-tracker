import { Injectable } from '@angular/core';
import { HISTORY_30_DAYS, TODAY_PRICES } from '../data/gold-data';
import { DailyPrice, GoldPrice, Karat } from '../models/gold.model';

@Injectable({ providedIn: 'root' })
export class GoldService {
  getTodayPrices(): GoldPrice[] {
    return TODAY_PRICES;
  }

  getPrice(karat: Karat): number {
    return TODAY_PRICES.find(p => p.karat === karat)?.pricePerGram ?? 0;
  }

  getHistory(): DailyPrice[] {
    return HISTORY_30_DAYS;
  }
}