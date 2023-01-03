import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Modal from '../common/Modal';

function Youtube() {
	const [vidList, setvidList] = useState([]);
	const [Index, setIndex] = useState(0);
	// const [Open, setOpen] = useState(false);
	useEffect(() => {
		const key = 'AIzaSyD62N3ObfAdS9fO3LIOtg5NYyfqE7sWmq4';
		const playlistId = 'PLSR_N0olb_L6i0FnFd21OJgVR35FIuqTe';
		const num = 8;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;
		axios.get(url).then((json) => {
			console.log(json.data.items);
			setvidList(json.data.items);
		});
	}, []);

	const open = useRef(null);

	return (
		<Layout name={'youtube'} h1name={'PORTFOLIO'} subtit={'리모델링 시공사례'}>
			{vidList.map((data, idx) => {
				const tit = data.snippet.title;
				const con = data.snippet.description;
				const date = data.snippet.publishedAt;

				return (
					<article key={data.id}>
						{/* <Link to={data.snippet.resourceId.videoId} className='pic'> */}
						<div className='pic' onClick={() => open.current.open()}>
							<img src={data.snippet.thumbnails.high.url} alt={data.snippet.title} />
							<Modal ref={open} index={Index} />
							{/* </Link> */}
						</div>
						<div className='txt'>
							<h2>{tit.length > 20 ? tit.substr(0, 20) + '...' : tit}</h2>
							<p>{con.length > 20 ? con.substr(0, 20) + '...' : con}</p>
							<span>{date.split('T')[0]}</span>
						</div>
					</article>
				);
			})}
		</Layout>
	);
}

export default Youtube;
