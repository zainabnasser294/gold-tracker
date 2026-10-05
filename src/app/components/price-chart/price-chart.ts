import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-price-chart',
  imports: [],
  templateUrl: './price-chart.html',
  styleUrl: './price-chart.css',
})
export class PriceChart {
  // الأسعار تجي من المكوّن الأب
  prices = input.required<number[]>();

  // عرض وارتفاع مساحة الرسم
  private readonly width = 600;
  private readonly height = 200;

  // نقاط الخط: كل سعر يتحول إلى "x,y"
  points = computed(() => {
    const data = this.prices();
    const min = Math.min(...data);
    const range = Math.max(...data) - min || 1;

    return data
      .map((value, i) => {
        // الأقدم على اليمين والأحدث على اليسار (مناسب للعربي)
        const x = this.width - (i / (data.length - 1)) * this.width;
        const y = this.height - ((value - min) / range) * this.height;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  });
}