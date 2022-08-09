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
exports.readTask = void 0;
const utils_1 = require("../../utils");
const readTodos_1 = require("./readTodos");
const readTask = (myid, req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield (0, readTodos_1.readTodos)();
        const foundedTodo = todos.find(todo => todo.id = +myid);
        foundedTodo ? (res.send(foundedTodo)) :
            (0, utils_1.throwErr)(`no task with the id of ${req.params.id}`);
        // (todos.some(task => task.id === +myid)) ? 
        // res.send(todos.filter(task => task.id === +myid )) :
        // throwErr(`no task with the id of ${req.params.id}`)
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.readTask = readTask;
