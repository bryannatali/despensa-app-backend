const User = require('../models/User');
const MarketList = require('../models/MarketList');
const Category = require('../models/Category');
const Item = require('../models/Item');

module.exports = {
    async index(req, res) {
        const { user } = req.headers;

        const loggedUser = await User.findById(user);

        if (!loggedUser)
            return res.status(400).json('User not found');

        const marketLists = await MarketList.find({
            _id: { $in: loggedUser.marketLists }
        });

        return res.json(marketLists);
    },

    async show(req, res) {
        const { _id } = req.params;

        const marketList = await MarketList.findById(_id)
        .populate({
                path: 'categories',
                model: Category,
                populate: {
                    path: 'items',
                    model: Item,
                },
            });

        return res.json(marketList);
    },

    async store(req, res) {
        const { user } = req.headers;
        const { name } = req.body;

        const loggedUser = await User.findById(user);

        if (!loggedUser)
            return res.status(400).json('User not found');

        const marketList = await MarketList.create({
            name
        });

        loggedUser.marketLists.push(marketList._id);

        await loggedUser.save();

        return res.json(marketList);
    },

    async delete(req, res) {
        const { _id } = req.params;

        await MarketList.deleteOne({ _id });

        return res.status(200).json('Market list deleted');
    }
}