import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import Modal from '../common/Modal';
function Vids() {
	const modal = useRef(null);
	const [index, setIndex] = useState(0);

	const Items = useSelector((store) => store.youtube.data);

	return (
		<>
			<section id='vids' className='myScroll'>
				<h1>Youtube</h1>
				{Items.map((data, idx) => {
					if (idx >= 2) return null;
					const tit = data.snippet.title;
					const con = data.snippet.description;
					return (
						<article key={tit}>
							<h2>{tit.length > 20 ? tit.substr(0, 20) + '...' : tit}</h2>
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
							<p>{con.length > 100 ? con.substr(0, 100) + '...' : con}</p>
						</article>
					);
				})}
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
