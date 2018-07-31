import * as srv from "../service/userService";
import { Context } from "../model/context"
import { Container } from "inversify";

module.exports = (container: Container) => {
    container.bind<Context>('Context').to(Context).inRequestScope().onActivation((context, con) => {
        con.connect();
        return con;
    });


    container.bind<srv.UserService>('UserService').to(srv.UserService).inRequestScope();
}

