import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Join() {
	const history = useHistory();
	const initVal = {
		userid: '',
		email: '',
		pwd1: '',
		pwd2: '',
		agree: null,
		gender: null,
		hobby: null,
		comments: '',
		edu: '',
	};
	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});
	const [Submit, setSubmit] = useState(false);

	const check = (value) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()_+]/;

		//userid
		if (value.userid.length < 5) {
			errs.userid = '입력항목을 5글자 이상 입력하세요';
		}
		//pwd
		if (
			// 			value.pwd1 !=== value.pwd2 왜안되지
			value.pwd1 !== value.pwd2 ||
			value.pwd1.length < 5 ||
			!eng.test(value.pwd1) ||
			!num.test(value.pwd1) ||
			!spc.test(value.pwd1)
		) {
			errs.pwd1 = '비밀번호는 5글자 이상, 영문, 숫자, 특수문자를 포함하여 동일하게 입력하세요';
		}
		if (!value.pwd2 || value.pwd1 !== value.pwd2) {
			errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요';
		}

		//email
		if (!/@/.test(value.email)) {
			errs.email = '@를 포함한 전체 이메일 주소를 입력하세요';
		}

		//gender
		if (!value.gender) {
			errs.gender = '필수 입력항목을 체크해주세요';
		}

		//agree
		if (!value.agree) {
			errs.agree = '필수 입력항목을 체크해주세요';
		}

		//hobby항목이 false면 에러객체 추가
		if (!value.hobby) {
			errs.hobby = '필수 입력항목을 체크해주세요';
		}

		if (value.comments.length < 20) {
			errs.comments = '입력항목을 20글자 이상 입력하세요';
		}
		//edu select함수
		if (value.edu === '') {
			errs.edu = '최종 학력을 선택하세요';
		}
		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	//radio 이벤트 함수
	const handleRadio = (e) => {
		const { name } = e.target;
		const isChecked = e.target.checked;
		setVal({ ...Val, [name]: isChecked });
	};

	//checkbox 이벤트 함수
	const handleCheck = (e) => {
		let isChecked = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');

		inputs.forEach((el) => {
			if (el.checked) isChecked = true;
		});
		setVal({ ...Val, [name]: isChecked });
	};

	//약관동의
	const handleAgree = (e) => {
		let isChecked = false;
		const { name } = e.target;
		setVal({ ...Val, [name]: isChecked });
	};

	//select선택 이벤트 함수
	const handleSelect = (e) => {
		const { name } = e.target;
		const isSelected = e.target.value;
		setVal({ ...Val, [name]: isSelected });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
		setSubmit(true);
	};

	//인풋요소 초기화 함수
	const handleReset = () => {
		setSubmit(false);
		setErr({});
		setVal(initVal);
	};

	useEffect(() => {
		const len = Object.keys(Err).length;
		if (len === 0 && Submit) {
			// alert('회원가입이 완료되었습니다.');
			history.push('/Result');
			window.scroll(0, 0);
		}
	}, [Err, Submit, history]);

	return (
		<Layout name={'join'} h1name={'MEMBERSHIP'} subtit={'회원가입'}>
			<div className='wrap'>
				<form action='' onSubmit={handleSubmit}>
					<fieldset>
						<legend className='hidden'>회원가입 폼 입력 양식</legend>
						<h2>
							<label htmlFor='terms'>MEMBER AGREEMENT</label>
						</h2>
						<textarea name='terms' id='terms' cols='30' rows='10'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio velit a
							id aperiam modi quae, dolores error deleniti quis nesciunt nam, quisquam dicta nostrum
							odio. Exercitationem debitis quis libero!Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Inventore distinctio velit a id aperiam modi quae, dolores error
							deleniti quis nesciunt nam, quisquam dicta nostrum odio. Exercitationem debitis quis
							liberoLorem ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio
							velit a id aperiam modi quae, dolores error deleniti quis nesciunt nam, quisquam dicta
							nostrum odio. Exercitationem debitis quis libero!Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Inventore distinctio velit a id aperiam modi quae,
							dolores error deleniti quis nesciunt nam, quisquam dicta nostrum odio. Exercitationem
							debitis quis libero! Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Inventore distinctio velit a id aperiam modi quae, dolores error deleniti quis
							nesciunt nam, quisquam dicta nostrum odio. Exercitationem debitis quis libero!Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio velit a id
							aperiam modi quae, dolores error deleniti quis nesciunt nam, quisquam dictt a id
							aperiam modi quae, dolores error deleniti quis nesciunt nam, quisquam dicta nostrum
							odio. Exercitationem debitis quis libero!Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Inventore distinctio velit a id aperiam modi quae, dolores error
							deleniti quis nesciunt nam, quisquam dicta nostrum odio. Exercitationem debitis quis
							libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio
							velit a id aperiam modi quae, dolores error deleniti quis nesciunt nam, quisquam dicta
							nostrum odio. Exercitationem debitis quis libero!Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Inventore distinctio velit a id aperiam modi
							quae,dolores error deleniti quis nesciunt nam, quisquam dicta nostrum odio.
							Exercitationem debitis quis libero! Lorem ipsum dolor sit amet consectetur adipisicing
							elit.Inventore distinctio velit a id aperiam modi quae, dolores error deleniti quis
							nesciunt nam, quisquam dicta nostrum odio. Exercitationem debitis quis libero!
						</textarea>
						{/*  agreement    */}
						<div className='agreement'>
							{/* <input type='checkbox' name='agree' id='agree' onChange={handleCheck} />
							 */}
							<input type='checkbox' name='agree' id='agree' onChange={handleAgree} />

							<label htmlFor='agree'>약관에 동의합니다</label>
							<p className='err'>{Err.agree}</p>
						</div>
						<h2>MEMBER INFORMATION</h2>
						{/* <table border='1'> */}
						<table>
							<caption className='hidden'>
								회원가입을 위한 아이디, 비밀번호, 이메일,성별,학력,취미, 남기는 말 입력 테이블
							</caption>
							<tbody>
								{/* user id */}
								<tr>
									<th scope='row'>
										<label htmlFor='userid'>USER ID</label>
									</th>
									<td>
										<input
											type='text'
											name='userid'
											id='userid'
											placeholder='아이디를 입력하세요'
											value={Val.userid}
											onChange={handleChange}
										/>
										<p className='err'>{Err.userid}</p>
									</td>
								</tr>
								{/* password */}
								<tr>
									<th scope='row'>
										<label htmlFor='pwd1'>PASSWORD</label>
									</th>
									<td>
										<input
											type='password'
											name='pwd1'
											id='pwd1'
											placeholder='비밀번호를 입력하세요.'
											value={Val.pwd1}
											onChange={handleChange}
										/>
										<p className='err'>{Err.pwd1}</p>
									</td>
								</tr>

								{/* re password */}
								<tr>
									<th scrope='row'>
										<label htmlFor='pwd2'>RE-PASSWORD</label>
									</th>
									<td>
										<input
											type='password'
											name='pwd2'
											id='pwd2'
											placeholder='비밀번호를 재입력하세요'
											value={Val.pwd2}
											onChange={handleChange}
										/>
										<p className='err'>{Err.pwd2}</p>
									</td>
								</tr>

								{/* email */}
								<tr>
									<th scope='row'>
										<label htmlFor='email'>E-MAIL</label>
									</th>
									<td>
										<input
											type='text'
											name='email'
											id='email'
											placeholder='이메일 주소를 입력하세요'
											value={Val.email}
											onChange={handleChange}
										/>
										<p className='err'>{Err.email}</p>
									</td>
								</tr>

								{/* edu */}
								<tr>
									<th scope='row'>
										<label htmlFor='edu'>EDUCATION</label>
									</th>
									<td>
										<select name='edu' id='edu' onChange={handleSelect}>
											<option value=''>선택하세요</option>
											<option value='elementary school'>초등학교 졸업</option>
											<option value='middle school'>중학교 졸업</option>
											<option value='high school'>고등학교 졸업</option>
											<option value='college'>대학교 졸업</option>
										</select>
										<p className='err'>{Err.edu}</p>
									</td>
								</tr>

								{/* gender */}
								<tr>
									<th scope='row'>GENDER</th>
									<td>
										<label htmlFor='male'>MALE</label>
										<input
											type='radio'
											name='gender'
											id='male'
											value='male'
											onChange={handleRadio}
										/>

										<label htmlFor='female'>FEMALE</label>
										<input
											type='radio'
											name='gender'
											id='female'
											value='female'
											onChange={handleRadio}
										/>
										<p className='err'>{Err.gender}</p>
									</td>
								</tr>

								{/* interests */}
								<tr>
									<th scope='row'>INTERESTS</th>
									<td>
										<label htmlFor='sports'>SPORTS</label>
										<input
											type='checkbox'
											name='hobby'
											id='sports'
											value='sports'
											onChange={handleCheck}
										/>

										<label htmlFor='music'>MUSIC</label>
										<input
											type='checkbox'
											name='hobby'
											id='music'
											value='music'
											onChange={handleCheck}
										/>

										<label htmlFor='game'>GAME</label>
										<input
											type='checkbox'
											name='hobby'
											id='game'
											value='game'
											onChange={handleCheck}
										/>

										<label htmlFor='reading'>READING</label>
										<input
											type='checkbox'
											name='hobby'
											id='reading'
											value='reading'
											onChange={handleCheck}
										/>
										<p className='err'>{Err.hobby}</p>
									</td>
								</tr>

								{/* comments */}
								<tr>
									<th scope='row'>
										<label htmlFor='comments'>Comments</label>
									</th>
									<td>
										<textarea
											name='comments'
											id='comments'
											// cols='30'
											// rows='5'
											value={Val.comments}
											onChange={handleChange}
											placeholder='남기는 말을 입력하세요.'
										></textarea>
										<p className='err'>{Err.comments}</p>
									</td>
								</tr>

								{/* button set */}
								<tr>
									<th colSpan='2'>
										<input type='RESET' value='CANCEL' onClick={handleReset} />
										<input type='submit' value='send' />
									</th>
								</tr>
							</tbody>
						</table>
					</fieldset>
				</form>
			</div>
		</Layout>
	);
}

export default Join;