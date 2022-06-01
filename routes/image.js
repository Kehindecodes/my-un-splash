const express = require('express');
const router = express.Router();

const { getImages, addImages } = require('../controllers/image.js');

router.route('/').get(getImages).post(addImages);

module.exports = router;
