"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { Response, Request, NextFunction } from "express";
const routes_1 = require("./routes");
const host = "localhost";
const port = 8000;
const app = (0, express_1.default)();
// body parser middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
(0, routes_1.routes)(app);
app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
