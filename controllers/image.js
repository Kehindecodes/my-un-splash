const Image = require('../model/image_model');

const getImages = async (req, res) => {
	const images = await Image.find({});
	res.status(200).json({ images });
};

const addImages = async (req, res) => {
	const images = await Image.create(req.body);
	res.status(201).json({ images });
};
const getImage = async (req, res, next) => {
	const { label: labelName } = req.params;
	const image = await Image.findOne({ label: labelName });
	if (!image) {
		return next(res.send('No Image with that label'));
	}
	res.status(200).json({ image });
};

module.exports = {
	getImages,
	addImages,
	getImage,
};
