import { Component, OnInit } from '@angular/core';
import { Currency } from '@Interfaces/currency.interface';
import { CurrencyService } from '@Services/currency.service';
import { LoadService } from '@Services/load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currencies:Currency[] = [];
  load = this.loadService.getLoad();

  constructor(
    private currencyService: CurrencyService,
    private loadService: LoadService
  ){}

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe(res=>{
      this.currencies = res;
    });
  }
}
