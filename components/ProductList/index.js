var express = require('express');
var router = express.Router();
const ProductController = require('./productListController')
router.use(express.static('public'));
router.get('/', ProductController.productList)
//ProductList - phan trang danh sach nguoi dung
module.exports = router;