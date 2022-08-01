import { todos } from "./todos"
import { throwErr } from "./throwErr";
import { Response, Request, NextFunction } from "express";

export const deleteTask = (myid: string, res: Response) => {
    try {
        (myid !== null) ?
            todos.splice(todos.findIndex(task => task.id === +myid), 1) :
            throwErr("there is no id")
        res.send(todos);
        
    }
    catch (error :any) {
        res.status(400).send(error.message);
    }
}