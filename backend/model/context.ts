import * as mongoose from "mongoose"
import { injectable, inject } from "inversify";
let user = require("./user");

@injectable()
export class Context {
    public async connect() { await mongoose.connect('mongodb://localhost:8585/tracker', { useNewUrlParser: true }); }
    public async dispose() {
        if (mongoose) await mongoose.disconnect();
    }

    get user() { return user; }

}