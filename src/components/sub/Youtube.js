import Layout from '../common/Layout';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../common/Modal';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

//새 재생목록playlist?list=PLSR_N0olb_L4y0L9t-ujNnuoJPO2R9G28
function Youtube() {
	const modal = useRef(null);
	const [Index, setIndex] = useState(0);
	// 유튜브에서 pop대신에 modal 로 썼음
	const vidList = useSelector((store) => store.youtube.data);
	return (
		<>
			<Layout name={'youtube'} h1name={'YOUTUBE'}>
				{vidList.map((data, idx) => {
					const tit = data.snippet.title;
					const con = data.snippet.description;
					const date = data.snippet.publishedAt;

					return (
						<div key={data.id} className='vidList'>
							{/* <Link to={data.snippet.resourceId.videoId} className='pic'> */}
							<article>
								<h3>{tit.length > 50 ? tit.substr(0, 50) + '...' : tit}</h3>

								<div className='txt'>
									{/* <h2>{tit.length > 30 ? tit.substr(0, 30) + '...' : tit}</h2> */}
									<p>{con.length > 200 ? con.substr(0, 200) + '...' : con}</p>
									<span>{date.split('T')[0]}</span>
								</div>

								<div
									className='pic'
									onClick={() => {
										setIndex(idx);
										modal.current.open();
									}}
								>
									<img src={data.snippet.thumbnails.high.url} alt={data.snippet.title} />
									<button className='play'>
										<FontAwesomeIcon icon={faPlay} className='play' />
									</button>
								</div>
							</article>
						</div>
					);
				})}
			</Layout>

			<Modal ref={modal}>
				<iframe
					title={vidList[0]?.id}
					src={`https://www.youtube.com/embed/${vidList[Index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Youtube;
