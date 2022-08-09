import { readTodos } from "./readTodos";
import { writeTodo } from "./writeTodo";
import { throwErr } from "../../utils";
import { Response, Request, NextFunction } from "express";

export const deleteTask = async (myid: string, res: Response) => {
    try {

        const todos = await readTodos();
        (myid !== null) ?
            todos.splice(todos.findIndex((task: any) => task.id === +myid), 1) :
            throwErr("there is no id")

        await writeTodo(JSON.stringify(todos,null,2));
        res.send(todos);
        
    }
    catch (error :any) {
        res.status(400).send(error.message);
    }
}