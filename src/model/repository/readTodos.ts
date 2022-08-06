import { readFile } from "fs/promises";
import { Todo } from "../todo";

export const readTodos = async () => {
    // const todoPath = __dirname + "../todos.json";
    const todoPath="/home/fateme/js/todoNodeJs/src/model/todos.json";
    console.log(todoPath);
    const todos = await readFile(todoPath, "utf8");
    return (JSON.parse(todos) as Todo[]);
}