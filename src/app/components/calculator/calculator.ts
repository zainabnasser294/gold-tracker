import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoldService } from '../../services/gold.service';
import { Karat } from '../../models/gold.model';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  private goldService = inject(GoldService);

  karats: Karat[] = [24, 22, 21, 18];
  selectedKarat = signal<Karat>(24);
  weight = signal<number | null>(null);
  total = signal<number | null>(null);
  error = signal('');

  // لما يتغير العيار نمسح النتيجة القديمة
  onKaratChange(karat: Karat) {
    this.selectedKarat.set(karat);
    this.total.set(null);
  }

  // لما يتغير الوزن نمسح النتيجة القديمة ورسالة الخطأ
  onWeightChange(grams: number | null) {
    this.weight.set(grams);
    this.total.set(null);
    this.error.set('');
  }

  calculate() {
    const grams = this.weight();
    if (!grams || grams <= 0) {
      this.error.set('أدخل وزناً أكبر من صفر');
      this.total.set(null);
      return;
    }
    this.error.set('');
    this.total.set(grams * this.goldService.getPrice(this.selectedKarat()));
  }
}