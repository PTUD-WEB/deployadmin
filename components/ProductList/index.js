var express = require('express');
var router = express.Router();
const ProductController = require('./productListController')
router.use(express.static('public'));
router.get('/', ProductController.productList)
//ProductList - quan ly he thong gian hang
module.exports = router;