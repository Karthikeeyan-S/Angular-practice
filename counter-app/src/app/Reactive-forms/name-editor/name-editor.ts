import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  imports: [ReactiveFormsModule],
  templateUrl: './name-editor.html',
  styleUrl: './name-editor.css',
})
export class NameEditor {
  name = new FormControl('')

  updateName(){
    this.name.setValue("Leo")
  }
}
