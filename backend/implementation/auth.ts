import * as express from "express";

module.exports = (app: express.Application) => {
    app.use(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (req.path.toLocaleLowerCase().includes("api")) {
            if (!req.session || (req.session && !req.session.token)) {
                res.status(401);
            }
        }
        next();
    })
}