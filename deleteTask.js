"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = void 0;
const todos_1 = require("./todos");
const returnedResponse_1 = require("./returnedResponse");
const throwErr_1 = require("./throwErr");
const deleteTask = (myid, res) => {
    try {
        (myid !== null) ?
            todos_1.todos.splice(todos_1.todos.findIndex(task => task.id === +myid), 1) :
            (0, throwErr_1.throwErr)("there is no id");
        (0, returnedResponse_1.returnedResponse)(todos_1.todos, res);
    }
    catch (error) {
        (0, returnedResponse_1.returnedResponse)(error.message, res);
    }
};
exports.deleteTask = deleteTask;
