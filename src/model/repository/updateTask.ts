import { throwErr } from "../../utils";
import { Response, Request, NextFunction } from "express";
import { readTodos } from "./readTodos";
import { writeTodo } from "./writeTodo";
import { Todo } from "../todo";

// const index = (myid: string, todos: Todo[]) => todos.findIndex(task => task.id === +myid);

const checkProperties = (myid: string, todos: Todo[], title?: string, completed?: boolean) => {

    const newTodo = {} as Partial<Todo>
    title && (newTodo.title = title);
    completed && (newTodo.completed = completed)

    const foundedTodo = {
        ...todos.find(todo => todo.id === +myid),
        ...newTodo
    }
    return [...todos.filter(todo => todo.id !== +myid), foundedTodo]

    // todos[index(myid, todos)].title = req.body.title ? req.body.title : todos[index(myid, todos)].title;
    // todos[index(myid, todos)].completed = req.body.completed ? req.body.completed : todos[index(myid, todos)].completed;
}

export const updateTask = async (myid: string, req: Request, res: Response) => {

    const todos = await readTodos();
    const { title, completed } = req.body;
    try {
        (myid === null) &&
            throwErr("there is no id")

        const newTodos = checkProperties(myid, todos, title, completed);

        await writeTodo(JSON.stringify(newTodos,null,2));
        res.send(newTodos);
    }
    catch (error: any) {
        res.status(400).send(error.message);
    }
}