const conf = require("../implementation/configuration");
let context = require("../model/context");
context = new context();

module.exports = (app) => {
    const r = new conf().getConfiguration().apiRoute + "/user";

    app.get(r, async (req, res) => {
        try {
            await context.connect();
            const u = new context.user({ name: 'aaa' });
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
}
