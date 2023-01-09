import Layout from '../common/Layout';
import { useState, useEffect } from 'react';

function Department(end, start = 0, duration = 1000) {
	const [count, setCount] = useState(start);
	useEffect(() => {
		let currentNum = start;
		const delay = parseInt(duration / end);

		const countUp = setInterval(() => {
			currentNum++;
			setCount(currentNum);

			if (currentNum === end) {
				clearInterval(countUp);
			}
		}, delay);
	}, [end, start, duration]);

	return (
		<Layout name={'department'} h1name={'ABOUT US'} subtit={'미술관 소개'}>
			<div className='introduce'>
				<h2>Introduce</h2>
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
				<h2>The owner of MMA</h2>
				<article>
					<div className='txt'>
						<h3>Lorem ipsum dolor sit amet.</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio dicta iste facilis
							possimus hic eligendi. Amet quis itaque temporibus. Numquam explicabo minus quae,
							consequuntur consectetur cumque voluptates beatae iste sed et voluptatibus tenetur
							dignissimos! Molestias nobis commodi soluta! Provident labore delectus, doloremque
							facilis blanditiis fugit ad accusamus sequi sint quos aspernatur obcaecati quidem ut
							saepe, iure veniam distinctio magni! Earum ipsam asperiores quibusdam ad consequuntur
							et fugit commodi fuga officia dolorum, dolorem dolore, recusandae nihil debitis,
							itaque nesciunt alias quos? Dolor, omnis optio! Facere culpa labore dolorum voluptas
							tenetur, sequi tempora commodi totam fugiat numquam voluptates quam, suscipit minus.
						</p>
					</div>
					<div className='pic'>
						<img src='' alt='' />
					</div>
				</article>
			</div>

			<div className='fac'>
				<h2>Facility information</h2>
				<div className='fac_wrap'>
					<article className='txt'>
						<h3>Introduce about Auxiliary Facility</h3>
					</article>

					<article>
						<img
							src={path + 'img/index_LatestProjects/Home - BDS Contract.jpg'}
							alt='galleryPreview1'
						/>
						<Link to='/Gallery'>VIEW MORE</Link>
					</article>
				</div>
			</div>
		</Layout>
	);
}

export default Department;
