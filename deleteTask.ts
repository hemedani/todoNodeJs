
import { ServerResponse } from "http";
import { todos } from "./todos"

export const deleteTask = (myid: string | null, res: ServerResponse) => {
    try {
        if (myid !== null) {
            todos.splice(todos.findIndex(task => task.id === +myid), 1);
        }
        else {
            throw new Error("there is no id");
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(todos));
    }
    catch (error) {
        console.log("error");
    }
}