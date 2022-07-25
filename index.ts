import http, { ServerResponse, ClientRequest } from "http";

const host = "localhost";
const port = 8000;

const requestListener = function (req: ClientRequest, res: ServerResponse) {
  res.writeHead(200);
  res.end("My first server!");
};

const server = http.createServer(requestListener as any);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
