"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = void 0;
const todos_1 = require("./todos");
const throwErr_1 = require("./throwErr");
const index = (myid) => todos_1.todos.findIndex(task => task.id === +myid);
const checkProperties = (myid, req, res) => {
    todos_1.todos[index(myid)]["title"] = req.body.title ? req.body.title : todos_1.todos[index(myid)]["title"];
    todos_1.todos[index(myid)]["completed"] = req.body.completed ? req.body.completed : todos_1.todos[index(myid)]["completed"];
};
const updateTask = (myid, req, res) => {
    try {
        (myid === null) ?
            (0, throwErr_1.throwErr)("there is no id") :
            checkProperties(myid, req, res);
        res.send(todos_1.todos);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
};
exports.updateTask = updateTask;
