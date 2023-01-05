import { Link } from 'react-router-dom';
function LatestProjects() {
	const path = process.env.PUBLIC_URL;
	return (
		<>
			<section id='LatestProjects' className='scroll_view'>
				<div className='inner'>
					<h1>LATEST PROJECTS</h1>
					<div className='wrap'>
						<article>
							<img
								src={path + 'img/index_LatestProjects/Home - BDS Contract.jpg'}
								alt='galleryPreview1'
							/>
							<Link to='/Gallery'>VIEW MORE</Link>
						</article>

						<article>
							<img
								src={path + 'img/index_LatestProjects/Home - BDS Contract.jpg'}
								alt='galleryPreview1'
							/>
							<Link to='/Gallery'>VIEW MORE</Link>
						</article>

						<article>
							<img
								src={path + 'img/index_LatestProjects/Home - BDS Contract.jpg'}
								alt='galleryPreview1'
							/>
							<Link to='/Gallery'>VIEW MORE</Link>
						</article>

						<article>
							<img
								src={path + 'img/index_LatestProjects/Home - BDS Contract.jpg'}
								alt='galleryPreview1'
							/>
							<Link to='/Gallery'>VIEW MORE</Link>
						</article>
					</div>
				</div>
			</section>
		</>
	);
}

export default LatestProjects;
