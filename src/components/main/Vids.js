import { useSelector } from 'react-redux';

function Vids() {
	const { youtube } = useSelector((store) => store.youtube.data);

	return (
		<section id='vids' className='myScroll'>
			<h1>Youtube</h1>
			{youtube.map((vid, idx) => {
				if (idx >= 2) return null;
				return (
					<article key={idx}>
						<div className='pic'>
							<img src={vid.snippet.thumbnails.standard.url} alt={vid.snippet.title} />
						</div>
						<h2>{vid.snippet.title}</h2>
					</article>
				);
			})}
		</section>
	);
}

export default Vids;
