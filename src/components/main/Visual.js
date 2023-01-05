function Visual() {
	return (
		<figure id='visual' className='scroll_view'>
			<article className='slider'>
				<div className='inner'>
					<h1>A BUILDER YOU CAN TRUST</h1>
				</div>
				<ul>
					<li data-index='1'></li>
					<li data-index='2'></li>
					<li data-index='3'></li>
				</ul>
			</article>

			<div className='Slide_btn'>
				<a href='#' className='prev'>
					<strong>PREV</strong>
				</a>

				<a href='#' className='next'>
					<strong>NEXT</strong>
				</a>
			</div>
		</figure>
	);
}

export default Visual;
