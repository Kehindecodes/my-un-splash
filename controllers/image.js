const Image = require('../model/image_model');

const getImages = async (req, res) => {
	const images = await Image.find({});
	res.status(200).json({ images });
};

const addImages = async (req, res) => {
	const images = await Image.create(req.body);
	res.status(201).json({ images });
};

module.exports = {
	getImages,
	addImages,
};
