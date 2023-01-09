import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Information({ Scrolled, currentPos }) {
	let scroll = Scrolled - currentPos || 0;
	scroll < 0 && (scroll = 0);

	return (
		<section id='information' className='scroll_view'>
			<div className='inner'>
				<h2>Special Exhibition</h2>
				<div
					className='wrap'
					style={
						{
							// transform: `translateY(-${Scrolled - currentPos}px)`,
							// opacity: scroll / 300,
						}
					}
				>
					<div className='pic'>
						<img src='' alt='' />
					</div>
					<div className='txt'>
						<h2>Vincent van Gogh</h2>
						<p>
							Vincent van Gogh (1853–1890) is world famous. Learn about his life, read his letters,
							or explore his paintings and drawings. Lorem ipsum, dolor sit amet consectetur
							adipisicing elit. Accusamus consequuntur impedit nulla laborum id deserunt nostrum
							illum maiores natus expedita!
						</p>
						<span>2022.12.24 - 2023.03.26</span>
						<button>예약하기</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Information;
