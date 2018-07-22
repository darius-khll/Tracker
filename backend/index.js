const express = require('express');
const app = express();
//const datas = require("./app/data/data.json");
//winston log

app.use(require('./implementation/log'));
app.use(require('./api/loginApi'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})




app.listen(3000, () => console.log('Example app listening on port 3000!'))