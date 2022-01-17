const {models} = require('../../models')

exports.CustomerList = (page = 0, itemPerPage = 12) => {
    return models.customers.findAll({offset: page*itemPerPage, limit: itemPerPage});
}
exports.listLocked = async (locked) => {
    const itemPerPage = 12;
    const all_customers = await models.customers.findAll({raw: true, limit: itemPerPage});
    let customers = []
    for (let i=0; i < all_customers.length; i++)
    {
        if(all_customers[i]['locked'] === locked)
        {
            customers.push(all_customers[i])
        }
    }
    return customers;
}
