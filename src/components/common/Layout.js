import { useEffect, useRef } from 'react';

function Layout(props) {
	const frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<figure>
				<div className='inner'>
					<h1>{props.h1name}</h1>
				</div>
			</figure>
			<div className='inner'>
				{props.children}
				{/* // 컨텐츠가 들어가는 부분 */}
			</div>
		</section>
	);
}

export default Layout;
