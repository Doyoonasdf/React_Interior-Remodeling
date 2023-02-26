import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Department(end, start = 0, duration = 1000) {
	const path = process.env.PUBLIC_URL;
	const [Fac, setFac] = useState([]);

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/aboutfac.json`).then((json) => {
			setFac(json.data.aboutfac);
		});
	}, []);

	return (
		<Layout name={'department'} h1name={'ABOUT US'}>
			<div className='owner'>
				{/* <h2>The owner of MMA</h2> */}
				<article>
					<div className='pic'>
						<img src={path + '/img/department/member6.jpg'} alt='owner' />
					</div>
					<div className='box'>
						<div className='txt'>
							<h3>The owner of MMA</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio dicta iste
								facilis possimus hic eligendi. Amet quis itaque temporibus. Numquam explicabo minus
								quae, consequuntur consectetur cumque voluptates beatae iste sed et voluptatibus
								tenetur dignissimos! Molestias nobis commodi soluta! Provident labore delectus,
								doloremque facilis blanditiis fugit ad accusamus sequi sint quos aspernatur
								obcaecati quidem ut saepe, iure veniam distinctio magni! Earum ipsam asperiores
								quibusdam ad consequuntur et fugit commodi fuga officia dolorum, dolorem dolore,
								recusandae nihil debitis, itaque nesciunt alias quos
							</p>
						</div>
					</div>
				</article>
			</div>

			<div className='fac'>
				<div className='txtBox'>
					<article className='facTxt'>
						<h2>Facility information</h2>
						<p>
							Introduce
							<br />
							about Facility
						</p>
					</article>
				</div>

				{Fac.map((data, idx) => {
					return (
						<div className='facBox' key={idx}>
							{/* <article key={idx}> */}
							<article>
								<div className='facPic'>
									<img
										src={`${process.env.PUBLIC_URL}/img/depIntroduceFac/${data.pic}`}
										alt={data.tit}
									/>
								</div>
								<div className='facCon'>
									<h2>{data.tit}</h2>
									<span>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, labore!
									</span>
								</div>
							</article>
						</div>
					);
				})}
			</div>
		</Layout>
	);
}

export default Department;
