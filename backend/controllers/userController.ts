import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { UserService } from "../service/userService";

@controller("/api/user")
export class UserController implements interfaces.Controller {

    constructor(@inject("UserService") private userService: UserService) { }

    @httpGet("/")
    private async index(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
        await this.userService.addUser();
        res.end("done");
    }
}