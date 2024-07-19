var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).json({ msg: "Hello World" });
});

router.get('/hello', function(req, res, next) {
    res.status(200).json({ msg: "route to /hello is ok" });
});

module.exports = router;