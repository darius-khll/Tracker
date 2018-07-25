import * as srv from "../service/userService";
import { Container } from "../node_modules/inversify";

module.exports = (container: Container) => {
    container.bind<srv.UserService1>('UserService1').to(srv.UserService1).inRequestScope();
    container.bind<srv.UserService>('UserService').to(srv.UserService).inRequestScope();
}

