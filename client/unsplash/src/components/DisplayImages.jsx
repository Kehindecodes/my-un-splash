import React from 'react';
import axios from 'axios';
import useSWR from 'swr';
const fetcher = async (url) => {
	const res = await axios.get(url);
	return res.data.images;
};

const DisplayImages = () => {
	const { data, error } = useSWR('/api/v1/images', fetcher);
	// const returnErr = () => console.log(data.images);
	// returnErr();
	if (error) return <div> failed to load ....</div>;
	if (!data) return <div>Loading....</div>;

	return (
		<div>
			{data.map((image) => (
				<div key={image.id}>
					<p>{image.url}</p>
				</div>
			))}
		</div>
	);
};

export default DisplayImages;
