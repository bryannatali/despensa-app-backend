const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { username, password } = req.body;

        const user = await User.findOne({
            username,
            password
        });

        if(!user)
            return res.status(404).json('User not found!');

        return res.json(user);
    }
}

//index,    show,     store, update, destroy
//list all, list one, save,  update, delete