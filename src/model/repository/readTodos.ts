import { readFile } from "fs/promises";
import { Todo } from "../todo";
import * as path from 'path';
export const readTodos = async () => {
    //It goes 1 folders or directories back from given __dirname.
    // and opens todo.json file
    const todoPath  = path.join(__dirname, '../todos.json');

    const todos = await readFile(todoPath, "utf8");
    return (JSON.parse(todos) as Todo[]);
}

// data of todos.json file
// [
//     { "id": 1, "title": "Learn TypeScript", "completed": false },
//     { "id": 2, "title": "Learn React", "completed": false },
//     { "id": 3, "title": "Learn Angular", "completed": false },
//     { "id": 4, "title": "Learn Node", "completed": false },
//     { "id": 5, "title": "Learn MongoDB", "completed": false },
//     { "id": 6, "title": "Learn GraphQL", "completed": false }
// ]