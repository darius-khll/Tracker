const mongoose = require('mongoose');

let user = mongoose.model('User', { name: String });

module.exports = user;

