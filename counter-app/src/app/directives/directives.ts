import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../highlight';

@Component({
  selector: 'app-directives',
  imports: [CommonModule, FormsModule,Highlight],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  movies = ["Pirates of the carribean",
    "Harry Potter",
    "The Dark Knight Triology",
    "Avengers",
    "Gaurdians of the Galaxy"
  ];

  fruits = ["Apple","Banana","Cherry","Pomegrenate"];

  showMe = false;

  applyCondition = false;
}
