import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-editor.html',
  styleUrl: './profile-editor.css',
})
export class ProfileEditor {
  
  profileForm = new FormGroup({
    firstname : new FormControl(''),
    lastname : new FormControl('')
  })

  onSubmit(){
    console.log(this.profileForm.value)
  }
}
