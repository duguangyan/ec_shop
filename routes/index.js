var express = require('express');
var router = express.Router();
var httpService = require('../service/httpService');
/* GET home page. */
router.get('/', function(req, res, next) {
    httpService.post('/auth/member/login',{user_name:15817390700,user_psw:123456},function(data){
        console.log(data);
        res.render('index', { title: data.msg });
    })

});

module.exports = router;
