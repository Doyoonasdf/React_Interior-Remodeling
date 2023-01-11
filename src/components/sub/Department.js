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
			<div className='introduce'>
				<h2>INTRODUCE</h2>
				<ul className='list'>
					<li>
						<div>
							<img src='' alt='' />
						</div>

						<span>
							<b className='list_1'>300</b>년
						</span>

						<p>창립년도</p>
					</li>
					<li>
						<div>
							<img src='' alt='' />
						</div>
						<span>
							<b className='list_2'>1</b>명
						</span>

						<p>직원 수</p>
					</li>
					<li>
						<div>
							<img src='' alt='' />
						</div>
						<span>
							<b className='list_3'>300</b>%
						</span>
						<p>연간 성장률</p>
					</li>
				</ul>
			</div>

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
						<p>Introduce about Auxiliary Facility</p>
					</article>
				</div>
				<div className='facBox'>
					{Fac.map((data, idx) => {
						return (
							<article>
								<div className='facPic'>
									<img
										src={`${process.env.PUBLIC_URL}/img/depIntroduceFac/${data.pic}`}
										alt={data.tit}
									/>
									<span>{data.tit}</span>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default Department;
