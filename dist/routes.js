"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const todos_1 = require("./todos");
const createTask_1 = require("./createTask");
const readTask_1 = require("./readTask");
const updateTask_1 = require("./updateTask");
const deleteTask_1 = require("./deleteTask");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const routes = (app) => {
    // todos list
    app.get("/todos", (req, res, next) => {
        res.send(todos_1.todos);
        next();
    });
    // create task
    app.post("/create", (req, res, next) => {
        (0, createTask_1.createTask)(req, res);
        next();
    });
    // read task
    app.get("/read/:id", (req, res, next) => {
        (0, readTask_1.readTask)(req.params.id, req, res);
        next();
    });
    // update task
    app.put("/update/:id", (req, res, next) => {
        (0, updateTask_1.updateTask)(req.params.id, req, res);
        next();
    });
    // delete task
    app.delete("/delete/:id", (req, res, next) => {
        (0, deleteTask_1.deleteTask)(req.params.id, res);
        next();
    });
};
exports.routes = routes;
// module.exports=router
