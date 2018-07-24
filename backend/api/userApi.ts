import * as express from "express";
const router = express.Router();
const conf = require("../implementation/configuration");
import * as con from "../model/context"
let context = new con.default();

const r = new conf().getConfiguration().apiRoute + "/user";

router.get(r, async (req, res) => {
    try {
        await context.connect();
        const u = new context.user({ name: 'bbb' });
        await u.save();
        res.send("done");
    }
    catch (e) {
        throw new Error(e);
    }
    finally {
        await context.dispose();
    }
});

module.exports = router;