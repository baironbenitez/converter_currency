import { Component, OnInit } from '@angular/core';
import { Currency } from './interfaces/currency.interfac';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currencies:Currency[] = [];

  constructor(private currencyService: CurrencyService){}

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe(res=>{
      this.currencies = res;
    });
  }
}
