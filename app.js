const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const images = require('./routes/image');
// middleware
app.use(express.static('./public'));
app.use(express.json());
// routes
app.use('/api/v1/images', images);
const port = process.env.PORT || 2022;
start = async () => {
	try {
		await connectDB(process.env.MONGODB_URI);
		console.log(':::> Connected to MongoDB database');
		app.listen(port,'0.0.0.0', () =>
			console.log(`Server is listening on port ${port}...`),
		);
	} catch (error) {
		console.log("<::: Couldn't connect to database ", error);
	}
};

start();
