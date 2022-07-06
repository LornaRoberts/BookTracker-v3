const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    rating: {type: Number, required: false, min: 1, max: 5},
    book: {type: String, required: true, max: 100},
    note: {type: String, required: false, max: 300}
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);