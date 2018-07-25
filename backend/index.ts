import "reflect-metadata"; //should be at first of line
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import { Container } from 'inversify';
import * as bodyParser from "body-parser";

import * as srv from "./service/userService";

import "./controllers/userController";

//const datas = require("./app/data/data.json");
//log(morgan, winston)
//orm, di ioc(awilix)(InversifyJS), test, sequelizejs orm, mongoose, jwt, forever, dateTimeOffset, eslint, blocking, swagger, generator, rx

//let container = require("./implementation/container");
let container = new Container();

// container.bind<srv.UserService>('UserService').to(srv.UserService);
// container.bind<srv.UserService1>('UserService1').to(srv.UserService1);

let server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //require('./implementation/log')(app);

    // app.get('/', (req, res) => {
    //     res.send('Hello World!')
    // })
});


//app.listen(3000, () => console.log('Example app listening on port 3000!'))
let app = server.build();
app.listen(3000);

/*
    docker run -p 27017:27017 -d -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=password mongo
*/