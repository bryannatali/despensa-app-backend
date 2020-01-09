const Category = require('../models/Category');

module.exports = {
    async store(req, res) {
        const { name } = req.body;

        const category = await Category.create({ name });

        return res.json(category);
    }
}