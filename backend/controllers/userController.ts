import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { UserService1, UserService } from "../service/userService";

@controller("/user")
export class UserController implements interfaces.Controller {

    constructor(@inject("UserService") private userService: UserService) { }

    @httpGet("/")
    private index(req: express.Request, res: express.Response, next: express.NextFunction): void {
        let a = this.userService.addUser();
        res.end(a);
    }
}