import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Convertion, Currency } from '@Interfaces/currency.interface';
import { CurrencyService } from '@Services/currency.service';
import { validateEqual } from 'src/app/utils/validate-equals';
@Component({
  selector: 'app-form-currency',
  templateUrl: './form-currency.component.html',
  styleUrls: ['./form-currency.component.scss']
})
export class FormCurrencyComponent implements OnInit {
  @Input() currencies: Currency[] = [];
  showCurrency = false;
  currency!:Convertion;
  submit = false;

  form = new FormGroup({
    amount: new FormControl(null, [Validators.required, Validators.min(1)]),
    from: new FormControl(null, [Validators.required]),
    to: new FormControl(null, [Validators.required]),
  },{
    validators:[validateEqual('from','to')]
  });

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(()=>{
      this.changeShowCurrency(false);
    })
  }

  converter(): void {
    if (this.form.valid && !this.submit) {
      const value: any = this.form.value;
      this.currencyService.converter(value).subscribe(res => {
        this.currency = res;
        this.changeShowCurrency(true);
      })
    }
  }

  get currencyTo():string{
    return this.form.value.to || '';
  }

  changeShowCurrency(show:boolean):void{
    this.showCurrency = show;
  }
}
