import { Component } from '@angular/core';
import { Tasks } from './interfaccia/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoList';
  arrayTasks:Tasks[]=[];

  constructor(){

  }

}
