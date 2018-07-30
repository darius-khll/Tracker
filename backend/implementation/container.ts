import * as srv from "../service/userService";
import { Context } from "../model/context"
import { Container } from "inversify";

module.exports = (container: Container) => {
    container.bind<Context>('Context').to(Context).inRequestScope();
    container.bind<srv.UserService>('UserService').to(srv.UserService).inRequestScope();
}

