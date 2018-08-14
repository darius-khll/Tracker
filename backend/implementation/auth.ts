import * as express from "express";
import * as jwt from "jsonwebtoken"

module.exports = (app: express.Application) => {
    app.use(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (req.path.toLocaleLowerCase().includes("api")) {
            let token = req.headers['x-access-token'];
            try {
                let obj = jwt.verify(token.toString(), "top_secret");
                req.user = (obj as any).user;
            }
            catch (e) {
                res.end("401");
                return;
            }
        }
        next();
    })
}