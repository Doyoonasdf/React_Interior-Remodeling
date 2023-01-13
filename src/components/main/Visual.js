function Visual() {
	const path = process.env.PUBLIC_URL;
	return (
		<figure id='visual' className='scroll_view'>
			<div className='inner'>
				<div className='pic'>
					<h4>VAN GOGH</h4>
					<img src={path + '/img/mainvisual/main.jpg'} alt='main' />
				</div>
				<div className='txt'>
					<h2>MOR Museum Art</h2>
					<h3> 2022.12.24 - 2023.03.26</h3>
				</div>
			</div>
		</figure>
	);
}

export default Visual;
