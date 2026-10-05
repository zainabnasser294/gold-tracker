import { Component , input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-price-card',
  styleUrl: './price-card.css',
  templateUrl: './price-card.html',
})
export class PriceCard {
karat = input.required<number>();
price = input.required<number>();

}