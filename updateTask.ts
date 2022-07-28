import { ServerResponse } from "http";
import { todos } from "./todos"

export const updateTask = (myid: string | null, mytitle: string | null,
    mycompleted: string | null, res: ServerResponse) => {
    try {
        if (myid === null) {
            throw new Error("there is no id");

        }
        if (mytitle !== null) {
            todos[todos.findIndex(task => task.id === +myid)]["title"] = mytitle;
        }
        else if (mycompleted !== null) {
            let index = todos.findIndex(task => task.id === +myid);
            todos[index]["completed"] = !todos[index]["completed"];
        }
        else {
            throw new Error("You have entered invalid property.");
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(todos));

    }
    catch (error) {
        console.log("error");
    }
}