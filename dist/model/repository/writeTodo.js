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
exports.writeTodo = void 0;
const promises_1 = require("fs/promises");
const buffer_1 = require("buffer");
const writeTodo = (newTodo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const todoPath = __dirname + "/todos.json";
        const todoPath = "/home/itcom/JavaScript/practices/todos/todoNodeJs/src/model/todos.json";
        console.log(todoPath);
        // const fs = require('fs');
        // const fileName = './file.json';
        // const file = require(fileName);
        // file.key = "new value";
        // fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err: any) {
        // if (err) return console.log(err);
        // console.log(JSON.stringify(file));
        // console.log('writing to ' + fileName);
        // });
        const controller = new AbortController();
        const { signal } = controller;
        const data = new Uint8Array(buffer_1.Buffer.from(newTodo));
        const promise = (0, promises_1.writeFile)(todoPath, data, { signal });
        // Abort the request before the promise settles.
        controller.abort();
        yield promise;
    }
    catch (err) {
        // When a request is aborted - err is an AbortError
        console.error(err);
    }
});
exports.writeTodo = writeTodo;
