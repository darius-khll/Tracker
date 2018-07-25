import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IUserService, IUserService1 } from "../service/IuserService";

@injectable()
export class UserService1 implements IUserService1 {
    public addUser1(): string {
        return "wow";
    }
}

/////////////////////

@injectable()
export class UserService implements IUserService {
    @inject("UserService1") private userService: UserService1
    public addUser(): string{
        return this.userService.addUser1();
    }
}