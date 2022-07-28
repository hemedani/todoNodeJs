import { ServerResponse } from "http";
import { todos } from "./todos"
const returnedResponse = (data: Record<string, any>, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(data));
}

const throwErr = (msg: string) => {
    throw new Error(
        msg
    )
}

export const readTask = (myid: string | null, mytitle: string | null,
    mycompleted: string | null, res: ServerResponse) => {
    try {
        return (myid !== null) ?
                returnedResponse(todos.find(task => task.id === +myid)!, res) :
            (mytitle !== null) ?
                returnedResponse(todos.filter(task => task.title === mytitle), res) :
            (mycompleted !== null) ?
                returnedResponse(todos.filter(task => task.completed === (mycompleted === "true" ? true : false)), res) : 
                throwErr("we have a problem")

    }
    catch (error) {
        console.log("error");
    }
}
