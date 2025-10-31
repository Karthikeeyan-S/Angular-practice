import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../car';


@Component({
  selector: 'app-components',
  imports: [CommonModule,FormsModule],
  standalone:true,
  templateUrl: './components.html',
  styleUrl: './components.css',
})
export class Components {
  carName:string = '';

  //@Output() carAdded = new EventEmitter<string>();

  constructor(private car:Car){

  }

  onSubmit(){
    console.log(this.carName)
    //this.carAdded.emit(this.carName);
    //We will be using service instead

    this.car.addCarName(this.carName);

  }
}
