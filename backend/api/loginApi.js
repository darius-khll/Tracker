const express = require('express');
const router = express.Router();

router.get('/get/:id', (req, res) => {
    let id = req.params.id;
    if(id == 1)
        throw new Error("error happens");
    let response = {
        id: id
    };
    res.end(JSON.stringify(response));
});

module.exports = router;