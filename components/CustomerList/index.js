var express = require('express');
var router = express.Router();

const CustomerListController = require('./CustomerListController')
router.use(express.static('public'));
router.get('/', CustomerListController.CustomerList)
// router.get('/:id', CustomerListController.productByCategories)
module.exports = router;