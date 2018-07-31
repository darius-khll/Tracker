import * as mongoose from "mongoose";

let addressModel = new mongoose.Schema({
    name: String
});

let address = mongoose.model('Address', addressModel);

module.exports = address;

