const mongoose = require('./connection');

const CheeseSchema = new mongoose.Schema({
    name: String,
    countryOfOrigin: String,
    image: String
});

const Cheese = mongoose.model('Cheese', CheeseSchema);

module.exports = Cheese;