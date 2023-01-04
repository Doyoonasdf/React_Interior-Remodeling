import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../common/Layout';
function Result() {
	return (
		<Layout name={'result'}>
			{/*       <h1 class="hidden">WELCOME <span>회원가입을 축하합니다!</span></h1> */}
			<div className='wrap'>
				<article>
					<img src={`${process.env.PUBLIC_URL}/img/`} alt='' />
				</article>
				<div className='txt'>
					<h2>회원 가입을 축하합니다!</h2>
					<p></p>
					<Link to='/'>VIEW MORE</Link>
				</div>
			</div>
		</Layout>
	);
}

export default Result;
