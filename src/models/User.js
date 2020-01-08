const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String
    },
    password: {
        type: String,
        required: true,
    },
    marketLists: [{
        type: Schema.Types.ObjectId,
        ref: 'MarketList',
    }]
});

module.exports = model('User', UserSchema);