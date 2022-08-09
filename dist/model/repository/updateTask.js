"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = void 0;
const utils_1 = require("../../utils");
const readTodos_1 = require("./readTodos");
const writeTodo_1 = require("./writeTodo");
// const index = (myid: string, todos: Todo[]) => todos.findIndex(task => task.id === +myid);
const checkProperties = (myid, todos, title, completed) => {
    const newTodo = {};
    title && (newTodo.title = title);
    completed && (newTodo.completed = completed);
    const foundedTodo = Object.assign(Object.assign({}, todos.find(todo => todo.id === +myid)), newTodo);
    return [...todos.filter(todo => todo.id !== +myid), foundedTodo];
    // todos[index(myid, todos)].title = req.body.title ? req.body.title : todos[index(myid, todos)].title;
    // todos[index(myid, todos)].completed = req.body.completed ? req.body.completed : todos[index(myid, todos)].completed;
};
const updateTask = (myid, req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield (0, readTodos_1.readTodos)();
    const { title, completed } = req.body;
    try {
        (myid === null) &&
            (0, utils_1.throwErr)("there is no id");
        const newTodos = checkProperties(myid, todos, title, completed);
        yield (0, writeTodo_1.writeTodo)(JSON.stringify(newTodos));
        res.send(newTodos);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.updateTask = updateTask;
