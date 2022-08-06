"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = void 0;
const todos_1 = require("./todos");
const throwErr_1 = require("./throwErr");
const createTask = (req, res) => {
    try {
        req.body.title !== null ?
            todos_1.todos.push({ id: todos_1.todos.length + 1, title: req.body.title, completed: false }) :
            (0, throwErr_1.throwErr)("there is no title.");
        res.send(todos_1.todos);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
};
exports.createTask = createTask;
