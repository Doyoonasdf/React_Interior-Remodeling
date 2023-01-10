import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import Modal from '../common/Modal';
function Pics() {
	const modal = useRef(null);
	const [index, setIndex] = useState(0);

	const Items = useSelector((store) => store.flickr.data);

	return (
		<>
			<section id='pics' className='scroll_view'>
				<div className='inner'>
					<h2>GALLERY</h2>
					<div className='wrap'>
						{Items.map((pic, idx) => {
							if (idx >= 5) return null;
							return (
								<div
									className='pic'
									onClick={() => {
										setIndex(idx);
										modal.current.open();
									}}
								>
									<img
										key={idx}
										src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
										alt={pic.title}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<Modal ref={modal}>
				<img
					src={`https://live.staticflickr.com/${Items[index]?.server}/${Items[index]?.id}_${Items[index]?.secret}_b.jpg`}
					alt={Items[index]?.title}
				/>
			</Modal>
		</>
	);
}

export default Pics;
