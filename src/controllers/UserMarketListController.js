const User = require('../models/User');
const MarketList = require('../models/MarketList');

module.exports = {
    async index(req, res) {
        const { user } = req.headers;

        const loggedUser = await User.findById(user);

        const marketLists = await MarketList.find({
            _id: { $in: loggedUser.marketLists }
        });

        return res.json(marketLists);
    },

    async store(req, res) {
        const { user } = req.headers;
        const { name } = req.body;

        const loggedUser = await User.findById(user);

        const marketList = await MarketList.create({
            name
        });

        loggedUser.marketLists.push(marketList._id);

        await loggedUser.save();

        return res.json(marketList);
    }
}