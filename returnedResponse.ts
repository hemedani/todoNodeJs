import { ServerResponse } from "http";

export const returnedResponse = (data: Record<string, any>, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(data));
}