import express from 'express';
import { Response, Request, NextFunction } from "express";
import { routes } from "./routes"

const host = "localhost";
const port = 8000;
const app=express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// app.use('/',require('./routes'));
app.use((req : Request, res : Response, next : NextFunction) => {
  routes(req, res);
  next();
}
);
app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});