

import { Tasks } from "./interfaccia/tasks";

export let todolist: Tasks[]=[];
export let completati:Tasks[]=[];
export let cont:number=0;


export function add(elem:Tasks):Promise<Tasks[]>{
  return new Promise ((resolve)=>{
    setTimeout(()=>{
      todolist.push(elem);
      cont++;
      resolve(todolist);
    },2000)
  })
}


export function complete(elem:Tasks):Promise<Tasks[]>{
   return new Promise((resolve)=>{
       setTimeout(()=>{
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
          resolve(todolist);
       },2000);
   });
}


