import * as mongoose from "mongoose"
import { injectable, inject } from "inversify";
let user = require("./user");
let address = require("./address");

@injectable()
export class Context {
    public async connect() { await mongoose.connect('mongodb://localhost:8585/tracker', { useNewUrlParser: true }); }
    public async dispose() {
        if (mongoose) await mongoose.disconnect();
    }

    public async checkOpenConnection() {
        if (!mongoose.connection.readyState) {
            await this.connect();
        }
    }

    public async save(obj: any) {
        //this.checkOpenConnection();
        await obj.save();
    }

    get user(): mongoose.Model<any> { return user; }
    get address(): mongoose.Model<any> { return address; }

}