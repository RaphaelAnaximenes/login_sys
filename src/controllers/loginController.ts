import { Request, Response } from "express";
import { users } from "../database/users";

interface EndpointParams {req: Request; res: Response;}

const loginJson = {endpoint: "/login", result: "success"};
const results = {success: "login success", denied: "denied"};

function retrieveUser(username: string, password: string) {
    return users.find(user => user.admin.username === username && user.admin.password === password);
}

export const loginController = (req: EndpointParams["req"], res: EndpointParams["res"]) => {
    if (req.method === "GET") { res.status(200).json(loginJson);}

    if (req.method === "POST") { 
        const { username, password } = req.body;
        const user = retrieveUser(username, password);

        (user)?
         res.status(200).json(results.success)
        :res.status(403).json(results.denied)
        }
    }
