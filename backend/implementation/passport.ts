import * as express from "express";
import * as passport from "passport"
let GoogleStrategy = require('passport-google-oauth20').Strategy;
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
    passport.use(new GoogleStrategy({
        clientID: '639660080162-6tggvtkpjrc42s0muqhbh7c2dp23cv1n.apps.googleusercontent.com',
        clientSecret: 'j4z3dJcUISefTt_yYPkBD8e-',
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
        (token: any, refreshToken: any, profile: any, done: any) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }
    ));

    app.use(passport.initialize());

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/userinfo.profile']
    }));
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            failureRedirect: '/'
        }),
        (req, res) => {
            req.session.token = req.user.token;
            res.redirect('/');
        }
    );

    app.get('/logout', (req, res) => {
        req.logout();
        req.session = null;
        res.redirect('/');
    });
}