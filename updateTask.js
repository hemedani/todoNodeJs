"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = void 0;
const todos_1 = require("./todos");
const updateTask = (myid, mytitle, mycompleted, res) => {
    try {
        if (myid === null) {
            throw new Error("there is no id");
        }
        if (mytitle !== null) {
            todos_1.todos[todos_1.todos.findIndex(task => task.id === +myid)]["title"] = mytitle;
        }
        else if (mycompleted !== null) {
            let index = todos_1.todos.findIndex(task => task.id === +myid);
            todos_1.todos[index]["completed"] = !todos_1.todos[index]["completed"];
        }
        else {
            throw new Error("You have entered invalid property.");
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(todos_1.todos));
    }
    catch (error) {
        console.log("error");
    }
};
exports.updateTask = updateTask;
