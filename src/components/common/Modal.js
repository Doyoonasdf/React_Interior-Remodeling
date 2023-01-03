import { forwardRef, useImperativeHandle, useState } from 'react';

const Modal = forwardRef((props, el) => {
	const [Open, setOpen] = useState(false);
	// const [Index, setIndex] = useState(0);
	useImperativeHandle(el, () => {
		return {
			open: () => setOpen(true),
			index: () => props.setIndex(0),
		};
	});

	return (
		<>
			{Open && (
				<aside>
					<iframe
					// setOpen={setOpen}
					// title={vidList[0].id}
					// src={`https://www.youtube.com/embed/${vidList[index].snippet.resourceId.videoId}`}
					></iframe>
					<span onClick={() => setOpen(false)}>close</span>
				</aside>
			)}
		</>
	);
});
export default Modal;
