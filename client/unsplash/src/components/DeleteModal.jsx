import { useRef, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const DeleteModal = ({
	openModal,
	closeModal,
	modalIsOpen,
	message,
	confirmDelete,
	id,
}) => {
	const cancelButtonRef = useRef(null);
	return (
		<Transition.Root show={modalIsOpen} as={Fragment}>
			<Dialog
				as='div'
				className='fixed z-10 inset-0 overflow-y-auto h-long'
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
              sm:my-8 sm:align-middle  h-smallmodal w-modal'>
							<div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
								<div className='sm:flex sm:items-start'>
									<div className='mt-3 text-center sm:mt-0 sm:text-left w-full'>
										<Dialog.Title
											as='h3'
											className='text-lg leading-6 text-text font-noto font-medium mb-4'>
											Are you sure?
										</Dialog.Title>
										<div>{message}</div>
										<div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse mt-5'>
											<button
												type='button'
												className='w-full inline-flex justify-center
                     border border-transparent shadow-sm px-4 py-2 text-white bg-red  font-noto rounded-xl p-3 text-sm  hover:bg-red-700 
                      focus:outline-none
 sm:ml-3 sm:w-auto sm:text-sm'
												onClick={() => confirmDelete(id)}>
												Delete
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

export default DeleteModal;
