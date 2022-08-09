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
exports.readAllTask = void 0;
const readTodos_1 = require("./readTodos");
const readAllTask = (res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("first of readAllTask");
    const todos = yield (0, readTodos_1.readTodos)();
    console.log("after read from file in readAllTask");
    res.send(todos);
    console.log("end of readAllTask");
});
exports.readAllTask = readAllTask;
