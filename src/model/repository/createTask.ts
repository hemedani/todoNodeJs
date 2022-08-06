import { throwErr } from "../../utils";
import { Response, Request, NextFunction } from "express";
import { readTodos } from "./readTodos";
import { writeTodo } from "./writeTodo";

export const createTask = async (req: Request, res: Response) => {
  try {
    const todos = await readTodos();
    req.body.title !== null ?
      todos.push({ id: todos.length + 1, title: req.body.title, completed: false }) :
      throwErr("there is no title.")

    await writeTodo(JSON.stringify(todos));

    res.send(todos);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
