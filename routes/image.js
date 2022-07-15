const express = require('express');
const router = express.Router();

const {
	getImages,
	addImages,
	getImage,
	deleteImage,
} = require('../controllers/image.js');

router.route('/').get(getImages).post(addImages);
router.route('/:label').get(getImage);
router.route('/:id').delete(deleteImage);
module.exports = router;
