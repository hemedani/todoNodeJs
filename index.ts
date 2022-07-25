import http, { ServerResponse, ClientRequest } from "http";

const host = "localhost";
const port = 8000;

let todos = [
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Learn React", completed: false },
  { id: 3, title: "Learn Angular", completed: false },
  { id: 4, title: "Learn Node", completed: false },
  { id: 5, title: "Learn MongoDB", completed: false },
  { id: 6, title: "Learn GraphQL", completed: false },
];
const requestListener = function (req: Request, res: ServerResponse) {
  if (req.url === "/todos") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(todos));
  }

  res.writeHead(200);
  res.end("My first server!");
};

const server = http.createServer(requestListener as any);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
