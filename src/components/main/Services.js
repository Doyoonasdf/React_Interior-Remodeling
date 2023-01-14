import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Services() {
	const [Mainservice, setMainservice] = useState([]);
	const [Index, setIndex] = useState(0);
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

	useEffect(() => {}, [Mainservice]);

	return (
		<section id='services' className='scroll_view'>
			<div className='innerH1'>
				<h1>OUR SERVICES</h1>
			</div>
			<div className='inner'>
				<div className='wrapUl'>
					<ul>
						{Mainservice.map((data, idx) => {
							let isOn = '';
							Index === idx && (isOn = 'on');
							return (
								<li key={idx} className={isOn} onClick={() => setIndex(idx)}>
									<Link to='#'>{data.name}</Link>
								</li>
							);
						})}
					</ul>
				</div>

				<div className='wrapArc'>
					{Mainservice.map((data, idx) => {
						let isOn = '';
						Index === idx && (isOn = 'on');
						return (
							// <article key={idx} className={isOn} onClick={on}>
							<article key={idx} className={isOn}>
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
