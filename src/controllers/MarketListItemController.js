const MarketList = require('../models/MarketList');
const Item = require('../models/Item');
const Category = require('../models/Category');

module.exports = {

    async store(req, res) {
        const { market_list } = req.params;
        const { name, quantity, category_id } = req.body;

        const marketList = await MarketList.findById(market_list);

        if (!marketList)
            return res.status(400).json('Market list not found!');

        const category = await Category.findById(category_id);

        if (!category)
            return res.status(400).json('Category not found!');

        const item = await Item.create({
            name,
            quantity,
            bought: false,
            category: category_id
        });

        category.items.push(item._id);

        await category.save();

        marketList.categories.push(category._id);

        await marketList.save();

        return res.json(item);
    },

    async update(req, res) {
        const { id , name, quantity, bought, category_id } = req.body;

        const item = await Item.findById(id);

        await item.update({ _id: id }, {
            $set: {
                name,
                quantity,
                bought
            }
        });

        return res.json(item);
    }
}