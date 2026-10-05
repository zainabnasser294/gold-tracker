import { Component, computed, inject, signal } from '@angular/core';
import { GoldService } from '../../services/gold.service';
import { Karat } from '../../models/gold.model';
import { PriceChart } from '../price-chart/price-chart';
import { StatCard } from '../stat-card/stat-card';

@Component({
  selector: 'app-trend',
  imports: [PriceChart ,StatCard ],
  templateUrl: './trend.html',
  styleUrl: './trend.css',
})
export class Trend {
  private goldService = inject(GoldService);

  history = this.goldService.getHistory();
  karats: Karat[] = [24, 22, 21, 18];
  selectedKarat = signal<Karat>(24);

  // أسعار العيار المختار فقط (30 رقم)
  prices = computed(() => this.history.map(day => day.prices[this.selectedKarat()]));

  current = computed(() => this.prices()[this.prices().length - 1]);
  previous = computed(() => this.prices()[this.prices().length - 2]);
  highest = computed(() => Math.max(...this.prices()));
  lowest = computed(() => Math.min(...this.prices()));
  change = computed(() => this.current() - this.previous());
}