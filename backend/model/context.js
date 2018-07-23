const mongoose = require('mongoose');

let user = require("./user");

class context {
    async connect() { await mongoose.connect('mongodb://localhost:8585/tracker'); }
    async dispose() { await mongoose.disconnect(); }

    get user() { return user; }
    
}

module.exports = context;