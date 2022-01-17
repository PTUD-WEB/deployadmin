var express = require('express');
var router = express.Router();
const CustomerDetailController = require('./CustomerDetailController')
/* GET home page. */
// router.get('/', ProductController.list)
router.use(express.static('public'));
router.get('/:id', CustomerDetailController.customerDetail);
module.exports = router;