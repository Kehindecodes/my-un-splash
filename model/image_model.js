const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImagesSchema = new Schema({
	label: String,
	url: String,
});

module.exports = mongoose.model('images', ImagesSchema);
