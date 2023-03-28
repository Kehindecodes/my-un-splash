import { useState } from 'react';
import './App.css';
import DisplayImages from './components/DisplayImages';
import Header from './components/Header';
import useSWR, { useSWRConfig } from 'swr';
import axios from 'axios';
import AddModal from './components/AddModal';
import DeleteModal from './components/DeleteModal.jsx';
import Footer from './components/Footer';

const fetcher = async (url) => {
	const res = await axios.get(url);
	return res.data.images;
};
function App() {
	const { mutate } = useSWRConfig();
	const { data, error } = useSWR('/api/v1/images', fetcher);
	const [searchTerm, setSearchTerm] = useState('');
	const [modalIsOpen, setIsOpen] = useState(false);
	const [label, setLabel] = useState('');
	const [url, setUrl] = useState('');
	const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
	const [id, setId] = useState(null);
	const [deleteMessage, setDeleteMessage] = useState(null);
	// const [images, setImages] = useState(data);
	// console.log(data);

	const onChange = (e) => {
		setSearchTerm(e.target.value);
		console.log(e.target.value);
	};
	const changeLabel = (e) => {
		setLabel(e.target.value);
		console.log(e.target.value);
	};
	const changeUrl = (e) => {
		setUrl(e.target.value);
		console.log(e.target.value);
	};
	const openModal = () => {
		setIsOpen(true);
	};
	const showDeleteModal = (id) => {
		setId(id);
		setShowDeleteConfirmation(true);
		setDeleteMessage(
			`Are you sure you want to delete '${
				data.find((x) => x._id === id).label
			}'?`,
		);
	};
	const closeModal = () => {
		setIsOpen(false);
	};
	const hideDeleteModal = () => {
		setShowDeleteConfirmation(false);
	};
	const updateFn = async (image) => {
		const images = [...data, image];
		return images;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newImage = {
			label: label,
			url: url,
		};
		// Update the local state immediately and fire the
		// request. Since the API will return the updated
		// data, there is no need to start a new revalidation
		// and we can directly populate the cache.
		await mutate('/api/v1/images', updateFn(newImage), {
			optimisticData: [...data, newImage],
			rollbackOnError: true,
			populateCache: true,
			revalidate: false,
		});
		// send text to the Api
		await fetch('/api/v1/images', {
			method: 'POST',
			body: JSON.stringify(newImage),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});

		// setLabel('');
		// setUrl('');
		closeModal();
		console.log('sent..');
	};
	// delete image and update the UI
	const handleDelete = async (id) => {
		await mutate(
			`/api/v1/images/${id}`,
			data.filter((img) => img.id !== id),
			false,
		);

		await fetch(`/api/v1/images/${id}`, {
			method: 'DELETE',
		});
		setShowDeleteConfirmation(false);
		console.log(id);
		console.log('deleted');
	};
	return (
		<div className='App'>
			<Header value={searchTerm} onChange={onChange} openModal={openModal} />
			<DisplayImages
				error={error}
				images={data}
				searchItem={searchTerm}
				handleDelete={showDeleteModal}
			/>
			<AddModal
				openModal={openModal}
				closeModal={closeModal}
				modalIsOpen={modalIsOpen}
				changeLabel={changeLabel}
				changeUrl={changeUrl}
				handleSubmit={handleSubmit}
				label={label}
				url={url}
			/>
			<DeleteModal
				openModal={showDeleteModal}
				closeModal={hideDeleteModal}
				modalIsOpen={showDeleteConfirmation}
				id={id}
				message={deleteMessage}
				confirmDelete={handleDelete}
			/>
			<Footer />
		</div>
	);
}

export default App;
