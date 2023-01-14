import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';

import Modal from '../common/Modal';
function Pics({ Scrolled, currentPos }) {
	const modal = useRef(null);
	const [index, setIndex] = useState(0);
	const Items = useSelector((store) => store.flickr.data);

	const base = -window.innerHeight / 3;
	let scroll = Scrolled - base - currentPos || 0;
	scroll < 0 && (scroll = 0);

	return (
		<>
			<section id='pics' className='scroll_view'>
				<div className='inner'>
					<h1
						style={{
							transform: `translateX(${100 + scroll * 2}px) scale(${1 + scroll / 200})`,
							opacity: 1 - scroll / 300,
						}}
					>
						GALLERY
					</h1>
					<h2>GALLERY</h2>
					<div className='wrap'>
						{Items.map((pic, idx) => {
							if (idx >= 5) return null;
							return (
								<div
									key={idx}
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
									<div className='view'>VIEW</div>
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
