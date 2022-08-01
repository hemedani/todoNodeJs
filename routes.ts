import { todos } from "./todos"
import { createTask } from "./createTask";
import { readTask } from "./readTask";
import { updateTask } from "./updateTask";
import { deleteTask } from "./deleteTask";
import { Response, Request, NextFunction } from "express";
const express=require('express');
const router=express.Router();

// todos list
router.get("/todos",(req:Request,res:Response)=>{
  res.send(todos)
})

// create task
router.post("/create" , (req:Request , res:Response)=>{
    createTask(req, res , ()=>{});
})
// read task
router.get("/read/:id", (req :Request, res:Response)=>{
  readTask(req.params.id , req , res);
})

// update task
router.put("/update" ,(req:Request , res:Response)=>{
    updateTask(req.params.id,req,res);
})

// delete task
router.delete("/delete/:id",(req:Request , res:Response)=>{
    deleteTask(req.params.id,res);
})

module.exports=router