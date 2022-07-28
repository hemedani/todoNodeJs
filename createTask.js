"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = void 0;
const todos_1 = require("./todos");
const returnedResponse_1 = require("./returnedResponse");
const throwErr_1 = require("./throwErr");
const pushTask = (title, res) => {
    todos_1.todos.push({ id: todos_1.todos.length + 1, title, completed: false });
    (0, returnedResponse_1.returnedResponse)(todos_1.todos, res);
};
const createTask = (title, res) => {
    try {
        (title === null) ?
            (0, throwErr_1.throwErr)("there is no title parameter.") :
            pushTask(title, res);
    }
    catch (error) {
        (0, returnedResponse_1.returnedResponse)(error.message, res);
    }
};
exports.createTask = createTask;
