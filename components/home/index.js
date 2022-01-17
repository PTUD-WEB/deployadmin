var express = require('express');
var router = express.Router();
// const HomeController = require('./homeController')
/* GET home page. */
// router.get('/', ProductController.list)
// router.use(express.static('public'));
// router.get('/', );
router.get('/', function(req, res, next) {
    res.render('user', { title: 'home' });
});
module.exports = router;
