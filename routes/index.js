var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).json({ msg: "Hello World" });
});

router.get('/hello', function(req, res, next) {
    res.status(200).json({ msg: "route to /hello is ok" });
});

router.get('/fare', function(req, res, next) {
    fetch('https://next-api.airpaz.com/v1/fl/flight/fare-calendar?depAirport=JKTA&arrAirport=SUB&currency=IDR&isRoundTrip=false&tripType=economy')
    .then((res) => res.json())
    .then((data) => {
        res.send({ data });
    })
    .catch((err) => {
        res.send(err);
    });
});

router.get('/trends', function(req, res, next) {
    fetch('https://exodus.stockbit.com/emitten/trending')
    .then((res) => res.json())
    .then((data) => {
        res.send({ data });
    })
    .catch((err) => {
        res.send(err);
    });
});

module.exports = router;