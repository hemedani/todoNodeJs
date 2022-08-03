import { todos } from "./todos"
import { createTask } from "./createTask";
import { readTask } from "./readTask";
import { updateTask } from "./updateTask";
import { deleteTask } from "./deleteTask";
import { Response, Request, NextFunction } from "express";
import express from "express"
// const express=require('express');
const router=express.Router();
export function routes(req : Request, res : Response)
{

    // todos list
    router.get("/todos",(req:Request,res:Response, next : NextFunction)=>{
      res.send(todos);
      next();
    })
    
    // create task
    router.post("/create" , (req:Request, res:Response, next : NextFunction) => {
        createTask(req, res);
        next();
    })
    // read task
    router.get("/read/:id", (req :Request, res:Response, next : NextFunction)=>{
      readTask(req.params.id , req , res);
      next();
    })
    
    // update task
    router.put("/update/:id" ,(req:Request , res:Response, next : NextFunction)=>{
        updateTask(req.params.id,req,res);
        next();
    })
    
    // delete task
    router.delete("/delete/:id",(req:Request , res:Response, next : NextFunction)=>{
        deleteTask(req.params.id,res);
        next();
    })
    
  //  module.exports=router
}