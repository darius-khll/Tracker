import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import { IUserService, IUserService1 } from "../service/IuserService";

@injectable()
export class UserService implements IUserService {
    @inject(TYPES.UserService1) private _srv: IUserService1;
    public addUser() {
        this._srv.addUser1();
    }
}

/////////////////////

@injectable()
export class UserService1 implements IUserService1 {
    public addUser1() {
        
    }
}