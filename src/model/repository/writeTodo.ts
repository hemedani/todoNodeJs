import { writeFile } from 'fs/promises';
import { Buffer } from 'buffer';
import * as path from 'path';
export const writeTodo = async (newTodo: string) => {
    try {
        const todoPath  = path.join(__dirname, '../todos.json');
  
        const controller = new AbortController();
        const { signal } = controller;
        const data = new Uint8Array(Buffer.from(newTodo));
        const promise = writeFile(todoPath, data, { signal });
        
        await promise;

        // Abort the request before the promise settles.
        controller.abort();
    } catch (err) {
        // When a request is aborted - err is an AbortError
        console.error(err);
    }
}