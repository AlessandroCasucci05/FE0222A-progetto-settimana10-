import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/interfaccia/tasks';
import { aggiungi,completa } from 'src/app/task.service'
import { todolist,cont } from 'src/app/task.service';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  active:boolean=true;
  TaskArray:Tasks[]=[];
  TasksArray:Tasks[]=todolist;
  num=cont;

  id:number=0;

  constructor() {
   }

  ngOnInit(): void {
     setTimeout(this.carica.bind(this),2000);
  }


  carica(){
    this.active=false;
  }

  addTask(task:string,element:HTMLInputElement){
    this.id++;
    this.TaskArray= [{id:this.id,text:task,completed:false}];
    aggiungi(this.TaskArray[0]);
    this.TasksArray=todolist;
    element.value="";
    this.num=cont;
  }

  completeTask(ele:Tasks){
     completa(ele);
     this.TasksArray=todolist;
     this.num=cont;
  }





}
