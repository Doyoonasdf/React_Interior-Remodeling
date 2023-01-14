import React from 'react';
import Layout from '../common/Layout';
function Result2() {
	return (
		<Layout name={'result2'}>
			<div className='wrap'>
				<div className='textWrap'>
					<div className='textBox'>
						<h2>
							역사와 예술이 살아숨쉬는 MMA전시회입니다<span>상담 신청이 완료되었습니다 </span>
						</h2>

						<div className='openInfo'>
							<h2>관람시간</h2>
							<p>
								월,화,목,금요일
								<span>10:00 - 18:00</span>
							</p>
							<p>
								토,일요일
								<span>09:00 - 21:00</span>
								(18:00-21:00 야간개장)
								<br />※ 휴관일: 매주 수요일
							</p>
						</div>
					</div>
				</div>
				<div className='imgWrap'>
					<div className='imgBox'></div>
				</div>
			</div>
		</Layout>
	);
}

export default Result2;
