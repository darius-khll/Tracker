import * as express from "express";

module.exports = (app: express.Application) => {
    app.use(async (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.send("Error: " + err.message);
        // if (res.statusCode == 500) {
        //     res.end("haha 500 ;)");
        // }
        // else if (res.statusCode == 401) {
        //     res.end("haha 401 ;)");
        // }
    })
}