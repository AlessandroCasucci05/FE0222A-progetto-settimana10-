import { Component, OnInit } from '@angular/core';
import { completati} from 'src/app/task.service';
import { Tasks } from 'src/app/interfaccia/tasks';


@Component({
  templateUrl: './tasksfiniti.component.html',
  styleUrls: ['./tasksfiniti.component.scss']
})
export class TasksfinitiComponent implements OnInit {

  arrayfiniti:Tasks[]=completati;
  attiva:boolean=true;

  constructor() {

  }

  ngOnInit(): void {
     setTimeout(()=>{
        this.attiva=false;
     },2000)
  }

}
