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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const createTask_1 = require("../model/repository/createTask");
const readTask_1 = require("../model/repository/readTask");
const updateTask_1 = require("../model/repository/updateTask");
const deleteTask_1 = require("../model/repository/deleteTask");
const express_1 = __importDefault(require("express"));
const readAllTasks_1 = require("../model/repository/readAllTasks");
const router = express_1.default.Router();
const routes = (app) => {
    // todos list
    app.get("/todos", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("method GET /todos");
        yield (0, readAllTasks_1.readAllTask)(res);
        console.log("readAllTasks finnished");
        next();
    }));
    // create task
    app.post("/create", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, createTask_1.createTask)(req, res);
        next();
    }));
    // read task
    app.get("/read/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, readTask_1.readTask)(req.params.id, req, res);
        next();
    }));
    // update task
    app.put("/update/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, updateTask_1.updateTask)(req.params.id, req, res);
        next();
    }));
    // delete task
    app.delete("/delete/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, deleteTask_1.deleteTask)(req.params.id, res);
        next();
    }));
};
exports.routes = routes;
// module.exports=router
