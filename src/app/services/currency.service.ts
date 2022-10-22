import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Converter, Convertion, Currency } from '../interfaces/currency.interfac';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  url_Base = environment.URL_CURRENCY;

  constructor(private http: HttpClient){}

  getCurrencies():Observable<Currency []>{
    return this.http.get<{ [key: string]: string  }>(`${this.url_Base}/currencies`).pipe(
      map((res)=>{
      return Object.keys(res).map(key=>{
        return {
          name: res[key],
          id: key
        }
      });
    }));
  }

  converter(value:Converter):Observable<Convertion>{
    return this.http.get<Convertion>(`${this.url_Base}/latest?amount=${value.amount}&from=${value.from}&to=${value.to}`);
  }
}
