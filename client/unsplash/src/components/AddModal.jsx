import { useState, useRef, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const AddModal = ({
	openModal,
	closeModal,
	modalIsOpen,
	changeLabel,
	changeUrl,
	handleSubmit,
	label,
	url,
}) => {
	const cancelButtonRef = useRef(null);
	return (
		<Transition.Root show={modalIsOpen} as={Fragment}>
			<Dialog
				as='div'
				className='fixed z-10 inset-0 overflow-y-auto'
				initialFocus={cancelButtonRef}
				onClose={closeModal}>
				<div className='fixed inset-0 bg-black/30' aria-hidden='true' />
				<div
					className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block
           sm:p-0'>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<Dialog.Overlay className='fixed inset-0 bg-trans transition-opacity' />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className='hidden sm:inline-block sm:align-middle sm:h-screen'
						aria-hidden='true'>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						enterTo='opacity-100 translate-y-0 sm:scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 translate-y-0 sm:scale-100'
						leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
						<div
							className='inline-block align-bottom bg-white rounded-lg
                 text-left 
              overflow-hidden shadow-xl 
              transform transition-all 
              sm:my-8 sm:align-middle  h-modal w-modal'>
							<div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
								<div className='sm:flex sm:items-start'>
									<div className='mt-3 text-center sm:mt-0 sm:text-left w-full'>
										<Dialog.Title
											as='h3'
											className='text-lg leading-6 text-text font-noto font-medium mb-4'>
											Add a new photo
										</Dialog.Title>
										<form className='mt-2 w-full' onSubmit={handleSubmit}>
											<div>
												<label className='block'>
													<span className='font-medium text-sm text-text2'>
														Label
													</span>
													<input
														className='mt-1 block w-full rounded-xl placeholder:text-placeholder '
														type='text'
														placeholder='Suspendisse elit massa'
														value={label}
														onChange={changeLabel}
													/>
												</label>

												<label className='block mt-5'>
													<span className='font-medium text-sm text-text2'>
														Photo URL
													</span>
													<input
														className='mt-1 block w-full rounded-xl placeholder:text-placeholder'
														type='text'
														placeholder='https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r...'
														value={url}
														onChange={changeUrl}
													/>
												</label>
											</div>
											<div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse mt-5'>
												<button
													type='submit'
													className='w-full inline-flex justify-center
                     border border-transparent shadow-sm px-4 py-2 text-white bg-gren  font-noto rounded-xl p-3 text-sm  hover:bg-red-700 
                      focus:outline-none
 sm:ml-3 sm:w-auto sm:text-sm'>
													Submit
												</button>
												<button
													type='button'
													className='mt-3 w-full inline-flex justify-center
                    rounded-md border border-none shadow-sm px-4 py-2
                     bg-white text-placeholder font-medium text-gray-700
                      hover: border-red  sm:mt-0
                        sm:ml-3 sm:w-auto sm:text-sm'
													onClick={closeModal}
													ref={cancelButtonRef}>
													Cancel
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default AddModal;
