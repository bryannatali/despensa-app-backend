const { Schema, model } = require('mongoose');

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: String,
    bought: {
        type: Boolean,
        required: true,
    }
});

module.exports = model('Item', ItemSchema);