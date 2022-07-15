const express = require('express');
const router = express.Router();

const { getImages, addImages, getImage } = require('../controllers/image.js');

router.route('/').get(getImages).post(addImages);
router.route('/:label').get(getImage);
module.exports = router;
