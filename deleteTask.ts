import { ServerResponse } from "http";
import { todos } from "./todos"
import { returnedResponse } from "./returnedResponse";
import { throwErr } from "./throwErr";

export const deleteTask = (myid: string | null, res: ServerResponse) => {
    try {
        (myid !== null) ?
            todos.splice(todos.findIndex(task => task.id === +myid), 1) :
            throwErr("there is no id")
        returnedResponse(todos,res);
    }
    catch (error :any) {
        returnedResponse(error.message,res);
    }
}