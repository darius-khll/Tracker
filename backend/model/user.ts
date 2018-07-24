import * as mongoose from "mongoose";

let user = mongoose.model('User', { name: String } as any);

module.exports = user;

