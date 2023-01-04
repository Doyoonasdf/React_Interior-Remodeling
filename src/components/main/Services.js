import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Services() {
	const [Mainservice, setMainservice] = useState([]);

	// useEffect(() => {
	// 	axios.get(`${process.env.PUBLIC_URL}/DB/mainservice.json`).then((json) => {
	// 		// console.log(json.data.mainservice);
	// 		setMainservice(json.data.mainservice);
	// 	});
	// }, []);

	useEffect(async () => {
		const result = await axios.get(`${process.env.PUBLIC_URL}/DB/mainservice.json`);
		setMainservice(result.data.mainservice);
	}, []);

	useEffect(() => {
		console.log(Mainservice);
	}, [Mainservice]);

	// const active = {
	// 	color: 'rgba(235, 213, 69, 0.989) ',
	// 	scale: '1.2',
	// };

	// const on = {
	// 	display: 'flex',
	// 	opacity: '1',
	// 	visibility: 'visible',
	// };

	return (
		<section id='services' className='scroll_view'>
			<div className='innerH1'>
				<h1>OUR SERVICES</h1>
			</div>
			<div className='inner'>
				<div className='wrapUl'>
					<ul>
						{Mainservice.map((data, idx) => {
							return (
								// <li key={idx} className={isOn} onClick={active}>
								<li key={idx}>
									<Link to='#'>{data.name}</Link>
								</li>
							);
						})}
					</ul>
				</div>

				<div className='wrapArc'>
					{Mainservice.map((data, idx) => {
						return (
							// <article key={idx} className={isOn} onClick={on}>
							<article key={idx}>
								<div className='pic'>
									<img
										src={`${process.env.PUBLIC_URL}/img/index_services/${data.pic}`}
										alt={data.name}
									/>
								</div>
								<div className='txt'>
									<h2>{data.name}</h2>
									<p>{data.content}</p>
									<Link to='#'>VIEW MORE</Link>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Services;
