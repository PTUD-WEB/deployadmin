const CustomerDetailService = require('./CustomerDetailService')
const {models} = require('../../models')

exports.customerDetail = async (req, res, next) => {
    const id = req.params.id;
    const page = req.query.page;
    if(page){
        const customer = await CustomerDetailService.find_customer(id);
        res.render('customerDetail', {customer});
    }
    else{
        const customer = await CustomerDetailService.find_customer(id);
        res.render('customerDetail', {customer});
    }
}