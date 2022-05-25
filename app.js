const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();

const port = process.env.PORT || 2022;

const start = async () => {
	try {
		await connectDB(process.env.MONGODB_URI);
		console.log(':::> Connected to MongoDB database');
		app.listen(port, () =>
			console.log(`Server is listening on port ${port}...`),
		);
	} catch (error) {
		console.log("<::: Couldn't connect to database ", error);
	}
};

start();
