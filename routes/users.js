var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('users', { title: 'Quản lý doanh thu' });
});
// router.use(express.static('public'));
// router.get('/', function(req, res, next) {}
module.exports = router;