const conf = require("../implementation/configuration");
//let context = require("../model/context");
import * as con from "../model/context"
let context = new con.default();

module.exports = (app : any) => {
    const r = new conf().getConfiguration().apiRoute + "/user";

    app.get(r, (req : any, res: any) => {
        // try {
        //     await context.connect();
        //     const u = new context.user({ name: 'aaa' });
        //     await u.save();
        //     res.send("done");
        // }
        // catch (e) {
        //     throw new Error(e);
        // }
        // finally {
        //     await context.dispose();
        // }
        res.end("aaa");
    });
}
