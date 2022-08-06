import { readTodos } from "./readTodos";
import { Response, Request, NextFunction } from "express";

export const readAllTask = async (res: Response) => {
    console.log("first of readAllTask");
    const todos = await readTodos();

    console.log("after read from file in readAllTask");
    res.send(todos);

    console.log("end of readAllTask");
}