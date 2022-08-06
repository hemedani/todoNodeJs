import { writeFile } from 'fs/promises';
import { Buffer } from 'buffer';

export const writeTodo = async (newTodo: string) => {
    try {
        // const todoPath = __dirname + "/todos.json";
        const todoPath="/home/fateme/js/todoNodeJs/src/model/todos.json";
        console.log(todoPath);
        
        // const fs = require('fs');
        // const fileName = './file.json';
        // const file = require(fileName);

        // file.key = "new value";

        // fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err: any) {
        // if (err) return console.log(err);
        // console.log(JSON.stringify(file));
        // console.log('writing to ' + fileName);
        // });

        const controller = new AbortController();
        const { signal } = controller;
        const data = new Uint8Array(Buffer.from(newTodo));
        const promise = writeFile(todoPath, data, { signal });

        // Abort the request before the promise settles.
        controller.abort();

        await promise;
    } catch (err) {
        // When a request is aborted - err is an AbortError
        console.error(err);
    }
}