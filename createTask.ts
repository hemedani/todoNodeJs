import { ServerResponse } from "http";
import { todos } from "./todos"
import { returnedResponse } from "./returnedResponse";
import { throwErr } from "./throwErr";

const pushTask=(title : string , res : ServerResponse)=>
{
  todos.push({id: todos.length+1, title, completed: false});
  returnedResponse(todos,res);
}

export const createTask = (title: string | null, res: ServerResponse) => {

    try {
      (title === null) ?
      throwErr("there is no title parameter.") : 
      pushTask(title, res)
    } catch (error : any) 
    {
      returnedResponse(error.message,res);        
    }
}
