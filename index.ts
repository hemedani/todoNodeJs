import { time } from "console";
import http, { ServerResponse, ClientRequest } from "http";
import { url } from "inspector";
import { todos } from "./todos"
import { createTask } from "./createTask";
import { readTask } from "./readTask";
import { updateTask } from "./updateTask";
import { deleteTask } from "./deleteTask";
import { returnedResponse } from "./returnedResponse";

const host = "localhost";
const port = 8000;

const getParameters=(reqParameter : string , myurl : URL)=> myurl.searchParams.get(reqParameter);

const requestListener = function (req: Request, res: ServerResponse) {

  const myUrl = new URL(`http://localhost:8000${req.url}`)
  
  switch (myUrl.pathname) {
    case "/todos" :
      returnedResponse(todos,res);
    case "/create" :
      return  createTask(myUrl.searchParams.get("title"), res)
    case "/read" :
      return readTask(getParameters("id",myUrl), getParameters("title",myUrl), getParameters("completed",myUrl), res); 
    case "/update" :
      return updateTask(getParameters("id",myUrl), getParameters("title",myUrl), getParameters("completed",myUrl), res); 
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