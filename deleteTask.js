"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = void 0;
const todos_1 = require("./todos");
const deleteTask = (myid, res) => {
    try {
        if (myid !== null) {
            todos_1.todos.splice(todos_1.todos.findIndex(task => task.id === +myid), 1);
        }
        else {
            throw new Error("there is no id");
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(todos_1.todos));
    }
    catch (error) {
        console.log("error");
    }
};
exports.deleteTask = deleteTask;
