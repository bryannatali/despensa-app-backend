const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.find();

        return res.json(users);
    },

    async store(req, res) {
        const { firstName, lastName, email, password } = req.body;

        const user = await User.create({
            firstName,
            lastName,
            email: email.toLowerCase(),
            username: email.split('@')[0],
            password
        });

        return res.json(user);
    }
}