const { Schema, model } = require('mongoose');

const MarketListSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category',
    }]
});

module.exports = model('MarketList', MarketListSchema);