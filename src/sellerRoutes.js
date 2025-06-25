const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, Sellers!');
});

module.exports = router;