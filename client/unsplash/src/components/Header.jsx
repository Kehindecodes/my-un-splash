import React from 'react';
import logo from '../assets/my_unsplash_logo.svg';

const Header = ({ onChange, value, openModal }) => {
	return (
		<header className='xs:w-full'>
			<div className='container px-1 flex items-center justify-between  xs:justify-start sm:justify-between w-full'>
				<div className='flex items-center'>
					<img src={logo} alt='logo' className='min-[320px]:block' />
					<input
						type='text'
						placeholder='search by name'
						className=' form-input xs:w-small  md:w-c rounded-xl border border-grey text-grey font-noto md:block input'
						value={value}
						onChange={onChange}
					/>
				</div>

				<button
					className='text-white bg-gren font-noto rounded-xl p-3 text-sm btn justify-self-end '
					onClick={openModal}>
					Add a photo
				</button>
			</div>
		</header>
	);
};

export default Header;
