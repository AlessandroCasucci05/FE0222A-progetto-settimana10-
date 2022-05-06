
import { Tasks } from "./interfaccia/tasks";

export let todolist: Tasks[]=[];
export let completati:Tasks[]=[];
export let cont:number=0;

export function aggiungi(elem: Tasks){
    todolist.push(elem);
    cont++;
}

export function completa(elem:Tasks){
      cont--;
      elem.completed=true;
      let b= todolist.find(x=>{
      return x.completed;
    });
    if (b!==undefined){
      completati.push(b);
    }


     let arr= todolist.filter(x=> {
       return x!==elem;
     })
     todolist=arr;
}

