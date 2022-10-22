import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  load = new BehaviorSubject(false);
  
  getLoad():Observable<boolean>{
    return this.load.asObservable()
  }

  setLoad(load: boolean):void{
    return this.load.next(load);
  }
}
