import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { map, Observable, catchError, throwError,delay } from 'rxjs';
import { LoadService } from '@Services/load.service';

@Injectable()
export class LoadInterceptor implements HttpInterceptor {

  constructor(private loadService: LoadService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadService.setLoad(true);
    return next.handle(request).pipe(
      //Se deja un delay para poder ver el loading 
      delay(2000),
      map(res=>{
        this.loadService.setLoad(false)
        return res;
      }),
      catchError(err=>{
        this.loadService.setLoad(false);
        return throwError(err);
      })
    )
  }
}
