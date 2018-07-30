import "reflect-metadata"; //should be at first of line
import { Container, AsyncContainerModule } from "inversify";
import * as calcService from "../service/calcService"
import * as srv from "../service/userService";
import { Context } from "../model/context"
import { InversifyExpressServer } from 'inversify-express-utils';

let container = new Container();
require("../implementation/container")(container); // it could be rebind later

describe('Test the root path', () => {

    beforeAll(async () => {
        require("../implementation/route");
        container.rebind<Context>('Context').to(Context).inRequestScope();
        container.rebind<srv.UserService>('UserService').to(srv.UserService).inRequestScope();
        let server = new InversifyExpressServer(container);
        let app = server.build();
        app.listen(3000, () => { console.log("start!") });
    });

    // test("Mock items", async () => {
    //     const Mock = jest.fn<Context>(() => ({
    //         connect: jest.fn().mockReturnValue(() => Promise.resolve({})),
    //         user: jest.fn().mockReturnValue(() => { return { save: () => { } }; }),
    //         dispose: jest.fn().mockReturnValue(() => Promise.resolve({}))
    //     }));
    //     const mock = new Mock();
    //     let data = new srv.UserService(mock);

    //     let a = await data.addUser();

    //     expect(true).toBe(a);
    // })

    test("user service should add to database", async () => {
        const userService = container.get<srv.UserService>("UserService");
        await userService.addUser();
        expect(1).toBe(1);
    });

    test('It should return sum of calcService', () => {
        let sum = new calcService.default().sum(1, 2);
        expect(sum).toBe(3);

        let sum1 = new calcService.default().sum(2, 2);
        expect(sum1).toBe(4);
    });
});