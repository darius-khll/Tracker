import * as mongoose from "mongoose"

let user = require("./user");

export default class context {
    public async connect() { await mongoose.connect('mongodb://localhost:8585/tracker'); }
    public async dispose() { await mongoose.disconnect(); }

    get user() { return user; }
    
}