import Layout from '../common/Layout';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../common/Modal';
import { Link } from 'react-router-dom';

function Youtube() {
	const modal = useRef(null);
	const [Index, setIndex] = useState(0);
	// 유튜브에서 pop대신에 modal 로 썼음
	const vidList = useSelector((store) => store.youtube.data);
	return (
		<>
			<Layout name={'youtube'} h1name={'PORTFOLIO'} subtit={'리모델링 시공사례'}>
				{vidList.map((data, idx) => {
					const tit = data.snippet.title;
					const con = data.snippet.description;
					const date = data.snippet.publishedAt;

					return (
						<div key={data.id} className='vidList'>
							{/* <Link to={data.snippet.resourceId.videoId} className='pic'> */}
							<article>
								<div
									className='pic'
									onClick={() => {
										setIndex(idx);
										modal.current.open();
									}}
								>
									<img src={data.snippet.thumbnails.high.url} alt={data.snippet.title} />
									{/* </Link> */}
								</div>

								<div className='con'>
									<h2>{tit.length > 20 ? tit.substr(0, 20) + '...' : tit}</h2>
									<p>{con.length > 20 ? con.substr(0, 20) + '...' : con}</p>
									<span>{date.split('T')[0]}</span>
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
