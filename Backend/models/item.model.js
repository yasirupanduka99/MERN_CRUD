const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
        trim: true,
    },
    itemCategory: {
        type: String,
        required: true,
        trim: true,
    },
    itemQty: {
        type: Number,
        required: true,
        trim: true,
    },
    itemDescription: {
        type: String,
        required: true,
        trim: true,
    },
});

const itemModel = mongoose.model('items', itemSchema); //this items is collection name
module.exports = itemModel;