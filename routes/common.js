var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/header', function(req, res, next) {
    res.render('common/header');
});
router.get('/footer', function(req, res, next) {
    res.render('common/footer');
});
module.exports = router;
