import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Directives } from './directives/directives';
import { Pipes } from './pipes/pipes';
import { Components } from './components/components';
import { List } from './list/list';
import { NameEditor } from './Reactive-forms/name-editor/name-editor';
import { ProfileEditor } from './Reactive-forms/profile-editor/profile-editor';
import { Post } from './HttpClient/post/post';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, Counter, Directives, Pipes, Components,List, NameEditor, ProfileEditor, Post],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('counter-app');

  // carNames:string[]=[];

  // onCarAdded(carName:string){
  //   console.log(carName, 'from app')
  //   this.carNames.push(carName);
  // }
  
  
}
