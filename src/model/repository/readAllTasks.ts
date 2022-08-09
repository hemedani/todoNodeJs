import { readTodos } from "./readTodos";
import { Response, Request, NextFunction } from "express";

export const readAllTask = async (res: Response) => {
    const todos = await readTodos();
    res.send(todos);
}