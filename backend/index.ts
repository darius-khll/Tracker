import "reflect-metadata"; //should be at first of line
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from "body-parser";
import { Container } from "inversify";

//const datas = require("./app/data/data.json");
//log(morgan, winston)
//orm, di ioc(awilix)(InversifyJS), test(jasmine, mocha, selenium, Artillery(load test))
//sequelizejs orm, mongoose, jwt, forever,
//dateTimeOffset, tslint, blocking, swagger, generator, rx, clustering, lodash, socket, GraphQL
//multer (multipart/form-data), JXcore

let container = new Container();
require("./implementation/container")(container);

let server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    require('./implementation/log')(app);

    app.get("/", (req, res, next) => {
        res.status(500);
    })
});

require("./implementation/route");


let app = server.build();
app.listen(3000, () => { console.log("start!") });

//vs code File => Preferences => Settings
// {
//     "javascript.implicitProjectConfig.experimentalDecorators": true
// }