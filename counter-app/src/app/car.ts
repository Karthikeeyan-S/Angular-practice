import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Car {

  private carNamesSubject = new BehaviorSubject<string[]>([]);  //subject

  carNames$ = this.carNamesSubject.asObservable(); //observable

  addCarName(name:string){
    //will be added
    const currentNames =  this.carNamesSubject.getValue();
    const updatedNames = [...currentNames,name];
    this.carNamesSubject.next(updatedNames);

  }
  
}
