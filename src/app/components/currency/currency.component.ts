import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Convertion } from '@Interfaces/currency.interface';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  @Input()currency!:Convertion;
  @Input() key!:string;
  @Output() resetCurrency = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  close():void{
   this.resetCurrency.emit();
  }
}
