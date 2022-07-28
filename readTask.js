"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readTask = void 0;
const todos_1 = require("./todos");
const readTask = (myid, mytitle, mycompleted, res) => {
    try {
        let result;
        if (myid !== null) {
            result = todos_1.todos.find(task => task.id === +myid);
        }
        else if (mytitle !== null) {
            result = todos_1.todos.filter(task => task.title === mytitle);
        }
        else if (mycompleted !== null) {
            result = todos_1.todos.filter(task => task.completed === (mycompleted === "true" ? true : false));
        }
        else {
            throw new Error("invalid property");
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(result));
    }
    catch (error) {
        console.log("error");
    }
};
exports.readTask = readTask;
