import { throwErr } from "../../utils";
import { readTodos } from "./readTodos";

import { Response, Request, NextFunction } from "express";

export const readTask = async (myid: string ,req : Request, res: Response) => {
    try {

        const todos = await readTodos();
        const foundedTodo = todos.find(todo => todo.id = +myid);

        foundedTodo ? ( res.send(foundedTodo)) : 
        throwErr(`no task with the id of ${req.params.id}`)

        // (todos.some(task => task.id === +myid)) ? 
        // res.send(todos.filter(task => task.id === +myid )) :
        // throwErr(`no task with the id of ${req.params.id}`)
    }
    catch (error:any) {
        res.status(400).send(error.message);
    }
}
