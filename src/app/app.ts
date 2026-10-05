import { Component, signal } from '@angular/core';
import { Header} from './components/header/header';
import { Hero } from './components/hero/hero';
import { Prices } from './components/prices/prices'; 
import { Calculator } from './components/calculator/calculator';
import { Trend } from './components/trend/trend';
import { HistoryTable } from './components/history-table/history-table';
import { Footer } from './components/footer/footer';


@Component({
  imports: [ Header ,Hero , Prices , Calculator , Trend  , HistoryTable , Footer ] ,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  
})
export class App {
  protected readonly title = signal('gold-tracker');
}
