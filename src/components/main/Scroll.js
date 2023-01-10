import { useRef, useEffect, useCallback } from 'react';
import Anim from '../../asset/anime';

function Scroll({ setScrolled, setPos }) {
	const pos = useRef([]);
	const num = useRef(6);
	const speed = useRef(500);
	const btnRef = useRef(null);

	const getPos = useCallback(() => {
		pos.current = [];
		const secs = btnRef.current.parentElement.querySelectorAll('.scroll_view');
		for (const sec of secs) pos.current.push(sec.offsetTop);
		setPos(pos.current);
	}, [setPos]);

	const activation = useCallback(() => {
		const btns = btnRef.current.children;
		const secs = btnRef.current.parentElement.querySelectorAll('.scroll_view');
		const scroll = window.scrollY;
		const base = -window.innerHeight / 3;
		setScrolled(scroll);

		pos.current.forEach((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				for (const sec of secs) sec.classList.remove('on');
				btns[idx].classList.add('on');
				secs[idx].classList.add('on');
			}
		});
	}, [setScrolled]);

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);

		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, [getPos, activation]);

	return (
		<ul className='Scroll' ref={btnRef}>
			{Array(num.current)
				.fill()
				.map((_, idx) => {
					let isOn = '';
					idx === 0 && (isOn = 'on');
					return (
						<li
							key={idx}
							className={isOn}
							onClick={() => {
								new Anim(window, {
									prop: 'scroll',
									value: pos.current[idx],
									duration: speed.current,
								});
							}}
						></li>
					);
				})}
		</ul>
	);
}

export default Scroll;
