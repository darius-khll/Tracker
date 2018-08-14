import * as express from "express";
import * as passport from "passport"
let LocalStrategy = require('passport-local').Strategy;

module.exports = (app: express.Application) => {

    passport.use(new LocalStrategy(
        function (username: any, password: any, done: any) {
            //   User.findOne({ username: username }, (err, user) => {
            //     if (err) { return done(err); }
            //     if (!user) { return done(null, false); }
            //     if (!user.verifyPassword(password)) { return done(null, false); }
            //     return done(null, user);
            //   });
            let user = { username: username, password: password };
            return done(null, user);
        }
    ));

    app.use(passport.initialize());

    app.get('/auth/test', (req, res) => {
        res.end("111");
    })

    app.post('/auth/login',
        passport.authenticate('local', { failureRedirect: '/login' }),
        function (req, res) {
            res.redirect('/');
        });
}