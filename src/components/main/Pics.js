import { useSelector } from 'react-redux';

function Pics() {
	const pics = useSelector((store) => store.flickr.data);

	return (
		<section id='pics' className='scroll_view'>
			<h1>Flickr</h1>
			{pics.map((pic, idx) => {
				if (idx >= 5) return null;
				return (
					<img
						key={idx}
						src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
						alt={pic.title}
					/>
				);
			})}
		</section>
	);
}

export default Pics;
