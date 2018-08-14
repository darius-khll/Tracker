import * as express from "express";
import * as passport from "passport"
let LocalStrategy = require('passport-local').Strategy;
import * as jwt from "jsonwebtoken"

import * as passportJWT from "passport-jwt"
const JWTstrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

module.exports = (app: express.Application) => {

    passport.use('signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
        (email: any, password: any, cb: any) => {
            //save user to db
            let user = { email: email, password: password };
            return cb(null, user, { message: 'Logged In Successfully' });
        }
    ));

    passport.use('login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
        (email: any, password: any, cb: any) => {
            //get user from db
            if (false) {
                return cb(null, false, { message: 'Incorrect email or password.' });
            }
            let user = { email: email, password: password };
            return cb(null, user, { message: 'Logged In Successfully' });
        }
    ));

    //app.use(passport.initialize());

    //This verifies that the token sent by the user is valid
    passport.use(new JWTstrategy({
        //secret we used to sign our JWT
        secretOrKey: 'top_secret',
        //we expect the user to send the token as a query paramater with the name 'secret_token'
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    }, async (token, done) => {
        try {
            //Pass the user details to the next middleware
            return done(null, token.user);
        } catch (error) {
            done(error);
        }
    }));

    app.post('/signup', passport.authenticate('signup', { session: false }), async (req, res, next) => {
        res.json({
            message: 'Signup successful',
            user: req.user
        });
    });

    app.post('/login', async (req, res, next) => {
        passport.authenticate('login', async (err, user, info) => {
            try {
                if (err || !user) {
                    const error = new Error('An Error occured')
                    return next(error);
                }
                req.login(user, { session: false }, async (error) => {
                    if (error) return next(error)
                    //We don't want to store the sensitive information such as the
                    //user password in the token so we pick only the email and id
                    const body = { _id: user._id, email: user.email };
                    //Sign the JWT token and populate the payload with the user email and id
                    const token = jwt.sign({ user: body }, 'top_secret');
                    //Send back the token to the user
                    return res.json({ token });
                });
            } catch (error) {
                return next(error);
            }
        })(req, res, next);
    });
}