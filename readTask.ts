import { todos } from "./todos"
import { throwErr } from "./throwErr";

export const readTask = (myid: string ,req : any, res: any) => {
    try {
        (todos.some(task => task.id === +myid)) ? 
        res.send(todos.filter(task => task.id === +myid )) :
        throwErr(`no task with the id of ${req.params.id}`)
    }
    catch (error:any) {
        res.status(400).send(error.message);
    }
}
