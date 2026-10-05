import { Component, inject } from '@angular/core';
import { GoldService } from '../../services/gold.service';

@Component({
  selector: 'app-history-table',
  imports: [],
  templateUrl: './history-table.html',
  styleUrl: './history-table.css',
})
export class HistoryTable {
  private goldService = inject(GoldService);

  // الأحدث أولاً: نسوي نسخة معكوسة من القائمة بدون ما نغيّر الأصل
  rows = [...this.goldService.getHistory()].reverse();
}