var express = require('express');
var router = express.Router();
const userController = require('./userController')
/* GET home page. */
// router.get('/', ProductController.list)
router.use(express.static('public'));
router.get('/', userController.list);
module.exports = router;
