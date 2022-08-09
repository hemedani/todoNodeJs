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
exports.createTask = void 0;
const utils_1 = require("../../utils");
const readTodos_1 = require("./readTodos");
const writeTodo_1 = require("./writeTodo");
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield (0, readTodos_1.readTodos)();
        req.body.title !== null ?
            todos.push({ id: todos.length + 1, title: req.body.title, completed: false }) :
            (0, utils_1.throwErr)("there is no title.");
        yield (0, writeTodo_1.writeTodo)(JSON.stringify(todos));
        res.send(todos);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.createTask = createTask;
