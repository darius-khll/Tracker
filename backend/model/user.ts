import * as mongoose from "mongoose";

let userModel = new mongoose.Schema({
    name: String
});

let user = mongoose.model('User', userModel);

module.exports = user;

