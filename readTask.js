"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readTask = void 0;
const todos_1 = require("./todos");
const throwErr_1 = require("./throwErr");
const readTask = (myid, req, res) => {
    try {
        (todos_1.todos.some(task => task.id === +myid)) ?
            res.send(todos_1.todos.filter(task => task.id === +myid)) :
            (0, throwErr_1.throwErr)(`no task with the id of ${req.params.id}`);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
};
exports.readTask = readTask;
