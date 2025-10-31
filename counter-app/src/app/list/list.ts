import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../car';

@Component({
  selector: 'app-list',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit{

  //@Input() carNames:string[] = [];
  carNames:string[] = [];
  constructor(private car:Car){

  }
  ngOnInit(): void {
      this.car.carNames$.subscribe((names) =>{
        this.carNames = names;
      } )
  }


}
