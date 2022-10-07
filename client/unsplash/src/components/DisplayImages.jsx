import { useState } from 'react';

const DisplayImages = ({ images, error, searchItem }) => {
	// const returnErr = () => console.log(data.images);
	// returnErr();
	if (error) return <div> failed to load ....</div>;
	if (!images) return <div>Loading....</div>;

	return (
		<div className='grid overflow-hidden grid-cols-3 grid-rows-2 gap-7 mt-12 '>
			{images
				.filter((filteredImage) => {
					if (searchItem === '') {
						return filteredImage;
					} else if (
						filteredImage.label.toLowerCase().includes(searchItem.toLowerCase())
					)
						return filteredImage;
				})
				.map((image, key) => (
					<div
						key={key}
						className='group relative wrapper hover:cursor-pointer w-normal'>
						<img
							src={image.url}
							alt={image.label}
							className='rounded-xl w-full h-small inset-0 bg-cover bg-center z-0 '
						/>
						<div className=' text-center bg-trans opacity-0 absolute top-0 right-0 w-full h-full  rounded-xl group-hover:opacity-100 duration-500 z-10 '>
							<div className='absolute top-3 right-3'>
								<button className=' border-solid border-2  border-red text-sm text-red text-center w-16 h-6 rounded-xl  '>
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
