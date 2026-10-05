import { Component , inject } from '@angular/core';
import { PriceCard } from '../price-card/price-card';
import { GoldService } from '../../services/gold.service';

@Component({
  imports: [PriceCard],
  selector: 'app-prices',
  styleUrl: './prices.css',
  templateUrl: './prices.html',
})
export class Prices {
 private goldService = inject(GoldService);
 prices = this.goldService.getTodayPrices();
}
