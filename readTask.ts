import { ServerResponse } from "http";
import { todos } from "./todos"
import { returnedResponse } from "./returnedResponse";
import { throwErr } from "./throwErr";

export const readTask = (myid: string | null, mytitle: string | null,
    mycompleted: string | null, res: ServerResponse) => {
    try {
        return (myid !== null) ?
                returnedResponse(todos.find(task => task.id === +myid)!, res) :
            (mytitle !== null) ?
                returnedResponse(todos.filter(task => task.title === mytitle), res) :
            (mycompleted !== null) ?
                returnedResponse(todos.filter(task => task.completed === (mycompleted === "true" ? true : false)), res) : 
                throwErr("there is no valid property.");

    }
    catch (error:any) {
        returnedResponse(error.message,res);   
    }
}
