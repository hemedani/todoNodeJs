import { createTask } from "../model/repository/createTask";
import { readTask } from "../model/repository/readTask";
import { updateTask } from "../model/repository/updateTask";
import { deleteTask } from "../model/repository/deleteTask";
import { Response, Request, NextFunction } from "express";
import express, { Express } from "express"
import { readAllTask } from "../model/repository/readAllTasks";
const router = express.Router();
export const routes = (app: Express) => {

  // todos list
  app.get("/todos", async (req: Request, res: Response, next: NextFunction) => {
    console.log("method GET /todos");
    await readAllTask(res);
    console.log("readAllTasks finnished");
    next();
  })
  // create task
  app.post("/create", async (req: Request, res: Response, next: NextFunction) => {
    await createTask(req, res);
    next();
  })
  // read task
  app.get("/read/:id", async (req: Request, res: Response, next: NextFunction) => {
    await readTask(req.params.id, req, res);
    next();
  })

  // update task
  app.put("/update/:id", async (req: Request, res: Response, next: NextFunction) => {
    await updateTask(req.params.id, req, res);
    next();
  })

  // delete task
  app.delete("/delete/:id", async (req: Request, res: Response, next: NextFunction) => {
    await deleteTask(req.params.id, res);
    next();
  })
}

    // module.exports=router