const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('TODOLIST ROUTE')
});


module.exports = router;