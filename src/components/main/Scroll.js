import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Anim from '../../asset/anime';

function Scroll({ setScrolled, setPos }) {
	const posArr = useRef([]);
	// const num = useRef(4);
	const scroll_li = useRef(null);
	const scrollSpeed = useRef(500);
	const [Mainscroll, setMainscroll] = useState([]);
	const [Index, setIndex] = useState(0);

	const getPos = () => {
		posArr.current = [];
		const boxs = scroll_li.current.parentElement.querySelectorAll('.scroll_view');
		for (const box of boxs) posArr.current.push(box.offsetTop);
		// console.log(posArr.current);
		setPos(posArr.current);
	};

	const scrollActivation = () => {
		const btns = scroll_li.current.children;
		const boxs = scroll_li.current.parentElement.querySelectorAll('.scroll_view');
		const scroll = window.scrollY;
		const base = -window.innerHeight / 3;
		setScrolled(scroll);

		posArr.current.forEach((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				for (const box of boxs) box.classList.remove('on');
				btns[idx].classList.add('on');
				boxs[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/mainscroll.json`).then((json) => {
			setMainscroll(json.data.mainscroll);
		});

		new Anim(window, {
			prop: 'scroll',
			value: posArr.current[0],
			duration: 0,
		});

		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', scrollActivation);
		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', scrollActivation);
		};
	}, []);

	useEffect(() => {
		// console.log(Mainscroll);
	}, [Mainscroll]);

	return (
		<ul className='Scroll' ref={scroll_li}>
			{Mainscroll.map((data, idx) => {
				let isOn = '';
				Index === idx && (isOn = 'on');
				return (
					<li
						key={idx}
						className={isOn}
						onClick={() =>
							new Anim(
								window,
								{
									prop: 'scroll',
									value: posArr.current[idx],
									duration: scrollSpeed.current,
								},
								setIndex(idx)
							)
						}
					>
						<span>{data.name}</span>
						<Link to='#'></Link>
					</li>
				);
			})}
			{/* {Array(num.current).fill().map((_, idx) => {
					let isOn = '';
					idx === 0 && (isOn = 'on');
					return <li key={idx} className={isOn}></li>;
				})} */}

			{/* <li className='on'>
				<span>HOME</span>
			</li>
			<li>
				<span>SERVICES</span>
			</li>
			<li>
				<span>NEWS</span>
			</li>
			<li>
				<span>PROJECTS</span>
			</li>
			<li>
				<span></span>
			</li> */}
		</ul>
	);
}

export default Scroll;
