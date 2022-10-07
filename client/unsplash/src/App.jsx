import { useState } from 'react';
import './App.css';
import DisplayImages from './components/DisplayImages';
import Header from './components/Header';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url) => {
	const res = await axios.get(url);
	return res.data.images;
};
function App() {
	const { data, error } = useSWR('/api/v1/images', fetcher);
	const [searchTerm, setSearchTerm] = useState('');
	const [images, setImages] = useState(data);
	console.log(data);
	// const search = () => {
	// 	return images.filter((item) => {
	// 		return item.toString().toLowerCase().indexOf(q.toLowerCase()) > -1;
	// 	});
	// };

	const onChange = (e) => {
		setSearchTerm(e.target.value);
		console.log(e.target.value);
	};
	return (
		<div className='App'>
			<Header value={searchTerm} onChange={onChange} />
			<DisplayImages error={error} images={images} searchItem={searchTerm} />
		</div>
	);
}

export default App;
