import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Currency } from 'src/app/interfaces/currency.interfac';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-form-currency',
  templateUrl: './form-currency.component.html',
  styleUrls: ['./form-currency.component.scss']
})
export class FormCurrencyComponent implements OnInit {

  @Input() currencies: Currency[] = [];
  form = new FormGroup({
    amount: new FormControl(null, [Validators.required, Validators.min(1)]),
    from: new FormControl(null, [Validators.required]),
    to: new FormControl(null, [Validators.required]),
  });
  submit = false;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
  }

  converter(): void {
    if (this.form.valid && !this.submit) {
      const value: any = this.form.value;
      this.currencyService.converter(value).subscribe(res => {
        console.log(res);
      })
    }
  }
}
