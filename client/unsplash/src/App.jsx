import { useState } from 'react';
import './App.css';
import DisplayImages from './components/DisplayImages';
import Header from './components/Header';
import useSWR from 'swr';
import axios from 'axios';
import AddModal from './components/AddModal';

const fetcher = async (url) => {
	const res = await axios.get(url);
	return res.data.images;
};
function App() {
	const { data, error } = useSWR('/api/v1/images', fetcher);
	const [searchTerm, setSearchTerm] = useState('');
	const [modalIsOpen, setIsOpen] = useState(false);
	// const [images, setImages] = useState(data);
	// console.log(data);

	const onChange = (e) => {
		setSearchTerm(e.target.value);
		console.log(e.target.value);
	};
	const openModal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div className='App'>
			<Header value={searchTerm} onChange={onChange} openModal={openModal} />
			<DisplayImages error={error} images={data} searchItem={searchTerm} />
			<AddModal
				openModal={openModal}
				closeModal={closeModal}
				modalIsOpen={modalIsOpen}
			/>
		</div>
	);
}

export default App;
