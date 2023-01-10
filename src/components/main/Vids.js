import { useSelector } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import Modal from '../common/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function Vids() {
	const modal = useRef(null);
	const [index, setIndex] = useState(0);
	const Items = useSelector((store) => store.youtube.data);

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, bahavior: 'smooth' });
	}, [Items]);
	return (
		<>
			<section id='vids' className='scroll_view'>
				<div className='inner'>
					<h2>YOUTUBE</h2>
					<div className='wrap'>
						{Items.map((data, idx) => {
							if (idx >= 5) return null;
							return (
								<article key={idx}>
									<div
										className='pic'
										onClick={() => {
											setIndex(idx);
											modal.current.open();
										}}
									>
										<img
											key={idx}
											src={data.snippet.thumbnails.standard.url}
											alt={data.snippet.title}
										/>
									</div>
									<div
										className='con'
										onClick={() => {
											setIndex(idx);
											modal.current.open();
										}}
									>
										<button className='play'>
											<FontAwesomeIcon icon={faPlay} className='play' />
										</button>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			<Modal ref={modal}>
				<iframe
					title={Items[index]?.id}
					src={`https://www.youtube.com/embed/${Items[index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Vids;
