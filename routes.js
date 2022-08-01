"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos_1 = require("./todos");
const createTask_1 = require("./createTask");
const readTask_1 = require("./readTask");
const updateTask_1 = require("./updateTask");
const deleteTask_1 = require("./deleteTask");
const express = require('express');
const router = express.Router();
// todos list
router.get("/todos", (req, res) => {
    res.send(todos_1.todos);
});
// create task
router.post("/create", (req, res) => {
    (0, createTask_1.createTask)(req, res, () => { });
});
// read task
router.get("/read/:id", (req, res) => {
    (0, readTask_1.readTask)(req.params.id, req, res);
});
// update task
router.put("/update", (req, res) => {
    (0, updateTask_1.updateTask)(req.params.id, req, res);
});
// delete task
router.delete("/delete/:id", (req, res) => {
    (0, deleteTask_1.deleteTask)(req.params.id, res);
});
module.exports = router;
