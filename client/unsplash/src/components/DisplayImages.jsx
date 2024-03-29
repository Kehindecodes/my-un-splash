import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import NotFound from './NotFound';

const DisplayImages = ({ images, error, searchItem, handleDelete }) => {
	// const returnErr = () => console.log(data.images);
	// returnErr();
	if (error) return <div> failed to load ....</div>;
	if (!images) return <div>Loading....</div>;
	const reversed = [...images].reverse();
	console.log(reversed);

	// check if any images match the search item
	const filteredImages = reversed.filter((filteredImage) => {
		if (searchItem === '') {
			return filteredImage;
		} else if (
			filteredImage.label.toLowerCase().includes(searchItem.toLowerCase())
		) {
			return filteredImage;
		} else {
			return null;
		}
	});
	const imagesFound = filteredImages.length > 0;

	return (
		<div className=' gap-8 xs:gap-0 md:gap-8   xs:columns-1 sm:columns-2 md:columns-3 my-12  xs:w-full flex-1  '>
			{!imagesFound && <NotFound />}
			{imagesFound &&
				filteredImages.map((image, key) => (
					<div
						key={key}
						className='relative group wrapper hover:cursor-pointer mb-4 w-full img-wrapper'>
						<img
							src={image.url}
							alt={image.label}
							className='rounded-xl  inset-0 bg-cover bg-center z-0  w-full'
						/>
						<div className=' text-center bg-trans opacity-0 absolute top-0 right-0 w-full h-full  rounded-xl group-hover:opacity-100 duration-500 z-10 '>
							<div className='absolute top-3 right-3'>
								<button
									className=' border-solid border-2  border-red text-sm text-red text-center w-16 h-6 rounded-xl  '
									onClick={() => handleDelete(image._id)}>
									delete
								</button>
							</div>
							<p className='text-white font-bold absolute bottom-0 text-lg text-center w-full mb-5'>
								{image.label}
							</p>
						</div>
					</div>
				))}
		</div>
	);
};

export default DisplayImages;
