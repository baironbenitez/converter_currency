import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormCurrencyComponent } from './components/form-currency/form-currency.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyComponent } from './components/currency/currency.component';
import { LoadComponent } from './components/load/load.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCurrencyComponent,
    CurrencyComponent,
    LoadComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
