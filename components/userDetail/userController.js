const userService = require('./userService')
exports.list = async (req, res) => {
    const books = await userService.list();
    res.render('userDetail', {books});
}