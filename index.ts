import { time } from "console";
import http, { ServerResponse, ClientRequest } from "http";
import { url } from "inspector";
import { todos } from "./todos"
import { createTodo } from "./createTodo";
import { readTask } from "./readTask";
import { updateTask } from "./updateTask";
import { deleteTask } from "./deleteTask";
const host = "localhost";
const port = 8000;


const requestListener = function (req: Request, res: ServerResponse) {

  const myUrl = new URL(`http://localhost:8000${req.url}`)

  console.log("url : ", myUrl.searchParams.get("title"))
  
  switch (myUrl.pathname) {
    case "/todos" :
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(todos));
    case "/create" :
      return  createTodo(myUrl.searchParams.get("title"), res)
    case "/read" :
      let myid = myUrl.searchParams.get("id");
      let mytitle = myUrl.searchParams.get("title");
      let mycompleted = myUrl.searchParams.get("completed");
      return readTask(myid, mytitle, mycompleted, res); 
    case "/update" :
      const selectedid = myUrl.searchParams.get("id");
      let newtitle = myUrl.searchParams.get("title");
      let newcompleted = myUrl.searchParams.get("completed");
      return updateTask(selectedid, newtitle, newcompleted, res); 
    case "/delete" :   
      return deleteTask(myUrl.searchParams.get("id"), res);
    default:
      res.writeHead(200);
      res.end("My first server!");
      break;
  }
};

const server = http.createServer(requestListener as any);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});





