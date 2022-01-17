const CustomerListService = require('./CustomerListService')
exports.CustomerList = async (req, res) => {
    const locked = req.query.locked;
    if(locked){
        const customers = await CustomerListService.listLocked(locked)
        res.render('CustomerList', {customers});
    }
    else
    { 
        const customers = await CustomerListService.CustomerList();
        res.render('CustomerList', {customers});
    }
}