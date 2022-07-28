"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = void 0;
const todos_1 = require("./todos");
const returnedResponse_1 = require("./returnedResponse");
const throwErr_1 = require("./throwErr");
const index = (myid) => todos_1.todos.findIndex(task => task.id === +myid);
const updateTask = (myid, mytitle, mycompleted, res) => {
    try {
        (myid === null) ?
            (0, throwErr_1.throwErr)("there is no id") :
            (mytitle !== null) ?
                todos_1.todos[index(myid)]["title"] = mytitle :
                (mycompleted !== null) ?
                    todos_1.todos[index(myid)]["completed"] = !todos_1.todos[index(myid)]["completed"] :
                    (0, throwErr_1.throwErr)("there is no valid property.");
        (0, returnedResponse_1.returnedResponse)(todos_1.todos, res);
    }
    catch (error) {
        (0, returnedResponse_1.returnedResponse)(error.message, res);
    }
};
exports.updateTask = updateTask;
