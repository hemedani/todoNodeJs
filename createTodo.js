"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todos_1 = require("./todos");
const createTodo = (title, res) => {
    try {
        if (title === null) {
            throw new Error("shoma khata darid");
        }
        todos_1.todos.push({ id: 8, title, completed: false });
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(todos_1.todos));
    }
    catch (error) {
        console.log("we have an error", error);
        res.writeHead(501, { "Content-Type": "application/json" });
        return res.end("shoma khata darid");
    }
};
exports.createTodo = createTodo;
