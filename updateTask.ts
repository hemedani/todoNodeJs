import { todos } from "./todos"
import { throwErr } from "./throwErr";
import { Response, Request, NextFunction } from "express";

const index=(myid:string)=>todos.findIndex(task => task.id === +myid);
const checkProperties=(myid:string , req:Request, res:Response) =>{
    todos[index(myid)]["title"] = req.body.title ? req.body.title : todos[index(myid)]["title"] ;
    todos[index(myid)]["completed"]= req.body.completed ?req.body.completed :todos[index(myid)]["completed"] ;
}
export const updateTask = (myid: string ,req:Request , res: Response) => {
    try {
        (myid===null)?
            throwErr("there is no id") : 
            checkProperties(myid,req, res);
        res.send(todos);
    }
    catch (error:any) {
        res.status(400).send(error.message);
    }
}