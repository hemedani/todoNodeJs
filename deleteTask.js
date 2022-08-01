"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = void 0;
const todos_1 = require("./todos");
const throwErr_1 = require("./throwErr");
const deleteTask = (myid, res) => {
    try {
        (myid !== null) ?
            todos_1.todos.splice(todos_1.todos.findIndex(task => task.id === +myid), 1) :
            (0, throwErr_1.throwErr)("there is no id");
        res.send(todos_1.todos);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
};
exports.deleteTask = deleteTask;
