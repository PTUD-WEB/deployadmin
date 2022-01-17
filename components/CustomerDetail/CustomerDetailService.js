const {models} = require('../../models')
exports.list = () => {
    return models.customers.findAll({raw: true});
}

exports.find_customer = async(id) => {
    const customers = await models.customers.findOne({where: {id: id}, raw: true});
    return customers;
}