import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Anim from '../../asset/anime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Information({ Scrolled, currentPos }) {
	let scroll = Scrolled - currentPos || 0;
	scroll < 0 && (scroll = 0);
	const [Slides, setSlides] = useState([]);
	const slider = useRef('');

	const init = () => {
		const panel = slider.current.querySelector('ul');
		const lis = panel.querySelectorAll('li');
		const len = lis.length;

		panel.style.width = 100 * len + '%';
		lis.forEach((el) => (el.style.width = 100 / len + '%'));
		panel.lastElementChild !== null && panel.prepend(panel.lastElementChild);
	};

	const nextSlide = () => {
		const panel = slider.current.children[0];

		new Anim(panel, {
			prop: 'margin-left',
			value: '-200%',
			duration: 500,
			callback: () => {
				panel.append(panel.firstElementChild);
				panel.style.marginLeft = '-100%';
			},
		});
	};

	const prevSlide = () => {
		const panel = slider.current.children[0];

		new Anim(panel, {
			prop: 'margin-left',
			value: '0%',
			duration: 500,
			callback: () => {
				panel.prepend(panel.lastElementChild);
				panel.style.marginLeft = '-100%';
			},
		});
	};

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/slider.json`).then((json) => {
			setSlides(json.data.slider);
		});
	}, []);

	useEffect(() => {
		init();
	}, [Slides]);

	return (
		<section id='information' className='scroll_view'>
			<div className='inner'>
				<h2>SPECIAL EXHIBITION</h2>
				<div id='slider' ref={slider}>
					<ul className='panel'>
						{Slides.map((slide, idx) => {
							return (
								<li key={idx}>
									<div className='wrap'>
										<div className='pic'>
											<img
												src={`${process.env.PUBLIC_URL}/img/slider/${slide.pic}`}
												alt={slide.No}
											/>
										</div>
										<div className='txt'>
											<h2>{slide.tit}</h2>
											<p>{slide.desc}</p>
											<span>{slide.date}</span>
											<button>{slide.res}</button>
										</div>
									</div>
								</li>
							);
						})}
					</ul>

					<button className='prev' onClick={prevSlide}>
						<FontAwesomeIcon icon={faAngleLeft} />
					</button>
					<button className='next' onClick={nextSlide}>
						<FontAwesomeIcon icon={faAngleRight} />
					</button>
				</div>
			</div>
		</section>
	);
}

export default Information;
