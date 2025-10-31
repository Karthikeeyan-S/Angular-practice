import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  toDate = new Date();
  title = "Hello World";
  word = "Welcome";
  items = ['Item1','Item2','Item3','Item4','Item5'];
  price = 500;
}
