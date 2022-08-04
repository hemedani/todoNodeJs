import { todos } from "./todos"
import { throwErr } from "./throwErr";
import { Response, Request, NextFunction } from "express";

export const createTask = (req:Request , res:Response) => {
    try {
      req.body.title!==null ?
      todos.push({id: todos.length+1, title :req.body.title, completed: false}):
      throwErr("there is no title.")

      res.send(todos);
    } catch (error : any) 
    {
      res.status(400).send(error.message);
    }
}
