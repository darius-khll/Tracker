import "reflect-metadata"; //should be at first of line
import * as express from "express"
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from "body-parser";
import { Container } from "inversify";
import * as passport from "passport"

//const datas = require("./app/data/data.json");
//log(morgan, winston)
//orm, di ioc(awilix)(InversifyJS), test(jest, jasmine, mocha, selenium, Artillery(load test))
//sequelizejs orm, mongoose, jwt, forever,
//dateTimeOffset, tslint, blocking, swagger, generator, rx, clustering, lodash, socket, GraphQL, passport
//multer (multipart/form-data), JXcore

let container = new Container();
require("./implementation/container")(container);

let server = new InversifyExpressServer(container);

declare global {
    namespace Express {
        interface Request {
            session: any
        }
    }
}

server.setConfig((app) => {
    require('./implementation/auth')(app);

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    require("./implementation/passport")(app);
    require("./implementation/passportLocal")(app);
    require("./implementation/passportGoogle")(app);
    

    app.get("/", (req: express.Request, res, next) => {

        let u = req.session.passport; //retrun object saved in cookie and deserialize that

        if (req.session.token) {
            res.cookie('token', req.session.token);
            res.json({
                status: 'session cookie set'
            });
        } else {
            res.cookie('token', '')
            res.json({
                status: 'session cookie not set'
            });
        }
        //res.status(500);
    })

    require('./implementation/log')(app);

});

require("./implementation/route");

let app = server.build();
app.listen(3000, () => { console.log("start!") });

//vs code File => Preferences => Settings
// {
//     "javascript.implicitProjectConfig.experimentalDecorators": true
// }