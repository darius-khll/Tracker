import * as express from "express";
import * as passport from "passport"
import * as cookieParser from "cookie-parser";
//import * as cookieSession from "cookie-session";
let cookieSession = require("cookie-session")

module.exports = (app: express.Application) => {
    app.use(cookieSession({
        name: 'session',
        keys: ['123']
    }));
    app.use(cookieParser());

    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
};