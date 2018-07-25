import "reflect-metadata"; //should be at first of line
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import * as bodyParser from "body-parser";
import { Container } from "inversify";

//const datas = require("./app/data/data.json");
//log(morgan, winston)
//orm, di ioc(awilix)(InversifyJS), test, sequelizejs orm, mongoose, jwt, forever, dateTimeOffset, eslint, blocking, swagger, generator, rx

require("./implementation/route");

let container = new Container();
require("./implementation/container")(container);

// container.bind<srv.UserService1>('UserService1').to(srv.UserService1);
// container.bind<srv.UserService>('UserService').to(srv.UserService);

let server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //require('./implementation/log')(app);
});


let app = server.build();
app.listen(3000);