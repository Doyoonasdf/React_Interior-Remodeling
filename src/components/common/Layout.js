import { useEffect, useRef } from 'react';

function Layout(props) {
	const frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<figure></figure>
			<div className='inner scroll_view'>
				<h1>
					{props.h1name}
					<span>{props.subtit}</span>
				</h1>
				{props.children}
				{/* // 컨텐츠가 들어가는 부분 */}
			</div>
		</section>
	);
}

export default Layout;
