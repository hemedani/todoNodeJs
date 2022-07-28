"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnedResponse = void 0;
const returnedResponse = (data, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(data));
};
exports.returnedResponse = returnedResponse;
