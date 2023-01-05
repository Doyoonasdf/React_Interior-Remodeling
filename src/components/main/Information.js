import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Information({ Scrolled, currentPos }) {
	let scroll = Scrolled - currentPos || 0;
	scroll < 0 && (scroll = 0);
	const history = useHistory();
	const initVal = {
		name: '',
		email: '',
		agree: null,
		tell1: '',
		tellMiddle: '',
		tellEnd: '',
	};
	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});
	const [Submit, setSubmit] = useState(false);

	const check = (value) => {
		const errs = {};
		const num = /^[0-9]+$/;

		if (!value.name) {
			errs.name = '이름을 입력하세요';
		}

		// 전화번호 010(셀렉트) + 중간&뒷자리 num입력
		if (
			value.tell1 !== '' ||
			value.tellMiddle.length !== 4 ||
			value.tellEnd.length !== 4 ||
			!num.test(value.tellMiddle) ||
			!num.test(value.tellEnd)
			// value.tellMiddle.length !== value.tellEnd.length ||
		) {
			errs.tellMiddle = '핸드폰 번호를 입력해주세요';
		}
		// if (value.tell1 === '' && value.tellMiddle.length !== 4 && !num.test(value.tellMiddle)) {
		// 	errs.tellEnd = '핸드폰 번호를 입력해주세요';
		// }
		// if (value.tell1 === '' && value.tellEnd.length !== 4 && !num.test(value.tellEnd)) {
		// 	errs.tellEnd = '핸드폰 번호를 입력해주세요';
		// }

		if (!value.agree) {
			errs.agree = '필수 입력항목을 체크해주세요';
		}
		if (!/@/.test(value.email)) {
			errs.email = '@를 포함한 전체 이메일 주소를 입력하세요';
		}
		return errs;
	};
	//010 번호 앞자리
	const handleSelect = (e) => {
		const { name } = e.target;
		const isSelected = e.target.value;
		setVal({ ...Val, [name]: isSelected });
	};
	//이름,번호(중간자리,뒷자리),이메일
	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};
	//동의
	const handleAgree = (e) => {
		const { name } = e.target;
		const isChecked = e.target.checked;
		setVal({ ...Val, [name]: isChecked });
	};
	//제출
	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
		setSubmit(true);
	};

	useEffect(() => {
		const len = Object.keys(Err).length;
		if (len === 0 && Submit) {
			history.push('/Result2');
			window.scroll(0, 0);
		}
	}, [Err, Submit, history]);

	return (
		<section id='information' className='action'>
			<div className='inner'>
				<div
					className='wrap'
					style={{
						// transform: `translateY(-${Scrolled - currentPos}px)`,
						opacity: scroll / 300,
					}}
				>
					<h1>ABOUT US</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis quisquam fugit
						maiores, sedarchitectoLLorem ipsum dolor sit amet consectetur, adipisicing elit.
						Perferendarchitectolor sit amet consectetur, adipisicingarchitectolor sit amet
						consectetur, adipisicing elit. Perferendis quisquam fugit maiores, sed architectosequi
						officia iusto expedita cum
					</p>
					<Link to='/department'>MORE</Link>
				</div>

				<div
					className='QiuckJoin'
					style={{
						transform: `translateY(${scroll}px) `,
					}}
				>
					<form action='' onSubmit={handleSubmit}>
						<h1>ASK FOR INFORMATION</h1>
						<fieldset>
							<legend className='hidden'>빠른 상담 신청</legend>
							<table>
								<caption className='hidden'>정보 입력 양식 테이블</caption>
								<tbody>
									{/* 이름 */}
									<tr>
										<th scope='row'>
											<label htmlFor='name'>NAME</label>
										</th>
										<td>
											<input
												type='text'
												name='name'
												id='name'
												value={Val.name}
												onChange={handleChange}
											/>
											<p className='err'>{Err.name}</p>
										</td>
									</tr>
									{/* 번호 */}
									<tr>
										<th scope='row'>
											<label htmlFor='tell'>PhoneNumber</label>
										</th>
										<td>
											<select name='tell1' id='tell' onChange={handleSelect}>
												<option value='010'>010</option>
												<option value='070'>070</option>
												<option value='032'>032</option>
											</select>
											<span className='inputSpan'>-</span>
											<input
												type='tel'
												name='tellMiddle'
												id='tell'
												value={Val.tellMiddle}
												onChange={handleChange}
											/>
											<span className='inputSpan'>-</span>
											<input
												type='tel'
												name='tellEnd'
												id='tell'
												value={Val.tellEnd}
												onChange={handleChange}
											/>
											<p className='err'>{Err.tellMiddle}</p>
										</td>
									</tr>
									{/* 이메일 */}
									<tr>
										<th scope='row'>
											<label htmlFor='email'>E-MAIL</label>
										</th>
										<td>
											<input
												type='text'
												name='email'
												id='email'
												placeholder='이메일 주소를 입력해 주세요'
												value={Val.email}
												onChange={handleChange}
											/>
											<p className='err'>{Err.email}</p>
										</td>
									</tr>
									<tr>
										<th colSpan={2}>
											<input type='checkbox' name='agree' id='agree' onChange={handleAgree} />
											<label htmlFor='agree'>약관에 동의합니다 </label>
											<input type='submit' value='SUBMIT' />
											<p className='err'>{Err.agree}</p>
										</th>
									</tr>
								</tbody>
							</table>
						</fieldset>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Information;
