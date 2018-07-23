const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const datas = require("./app/data/data.json");
//winston log, orm, di, test, sequelizejs orm, mongoose, jwt, forever, dateTimeOffset, eslint, blocking, swagger

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./implementation/log'));
let api = require('./implementation/apiRouter')(app); //apis should configured here

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))

/*
    docker run -p 27017:27017 -d -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=password mongo
*/