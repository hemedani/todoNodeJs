import { ServerResponse } from "http";
import { todos } from "./todos"

export const createTodo = (title: string | null, res: ServerResponse) => {

    try {
       if (title === null) {
        throw new Error("shoma khata darid");
       } 
  todos.push({id: todos.length+1, title, completed: false})
  res.writeHead(200, { "Content-Type": "application/json" });
  return res.end(JSON.stringify(todos));

    } catch (error) {
        
  console.log("we have an error", error)
  res.writeHead(501, { "Content-Type": "application/json" });
  return res.end("shoma khata darid");
        
    }
}
