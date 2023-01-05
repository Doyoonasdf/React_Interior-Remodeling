import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Department() {
	const [Depcompany, setDepcompany] = useState([]);
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/dep.json`).then((json) => {
			console.log(json.data.dep);
			setDepcompany(json.data.dep);
		});
	}, []);

	return (
		<Layout name={'department'} h1name={'ABOUT US'} subtit={'회사소개 및 구성원'}>
			<h2>OUR COMPANY</h2>
			<ul className='list'>
				<li>
					<div>
						<img src='' alt='' />
						<span>
							<b></b>
						</span>
						<p></p>
					</div>
				</li>
			</ul>

			<div className='wrap'>
				<h2>OUR MEMBERS</h2>
				<article>
					<div className='txt'>
						<h3></h3>
						<p></p>
					</div>
					<div className='pic'>
						<img src='' alt='' />
					</div>
				</article>
			</div>
		</Layout>
	);
}

export default Department;
