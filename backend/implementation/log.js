const express = require('express');
const app = express();

app.use((req, res, next) => {
    next();
    let a = res.statusCode;
})

module.exports = app;