import { ServerResponse } from "http";
import { todos } from "./todos"
import { returnedResponse } from "./returnedResponse";
import { throwErr } from "./throwErr";

const index=(myid:string)=>todos.findIndex(task => task.id === +myid);

export const updateTask = (myid: string | null, mytitle: string | null,
    mycompleted: string | null, res: ServerResponse) => {
    try {
        (myid===null)?
            throwErr("there is no id") : 
        (mytitle!==null) ?
            todos[index(myid)]["title"] = mytitle :
        (mycompleted!==null) ?
            todos[index(myid)]["completed"]= !todos[index(myid)]["completed"] :
        throwErr("there is no valid property.")

       returnedResponse(todos,res); 
    }
    catch (error:any) {
        returnedResponse(error.message,res);
    }
}