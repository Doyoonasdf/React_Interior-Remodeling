import { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';

function Location() {
	//인증함수
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
			errs.name = 'Please enter your name';
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
			errs.tellMiddle = 'Please enter your PhoneNumber';
		}
		// if (value.tell1 === '' && value.tellMiddle.length !== 4 && !num.test(value.tellMiddle)) {
		// 	errs.tellEnd = '핸드폰 번호를 입력해주세요';
		// }
		// if (value.tell1 === '' && value.tellEnd.length !== 4 && !num.test(value.tellEnd)) {
		// 	errs.tellEnd = '핸드폰 번호를 입력해주세요';
		// }

		if (!value.agree) {
			errs.agree = 'Please check the required';
		}
		if (!/@/.test(value.email)) {
			errs.email = 'Please include @ in your email';
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

	//지도
	const { kakao } = window;
	const markerOptions = [
		{
			title: '서울본점',
			latlng: new kakao.maps.LatLng(37.5278751, 127.0418071),
			imgSrc: `${process.env.PUBLIC_URL}/img/location_logo1.png`,
			imgSize: new kakao.maps.Size(64, 64),
			imgPos: { offset: new kakao.maps.Point(32, 64) },
		},
		{
			title: '천안지점',
			latlng: new kakao.maps.LatLng(36.8004193, 127.1048722),
			imgSrc: `${process.env.PUBLIC_URL}/img/location_logo1.png`,
			imgSize: new kakao.maps.Size(64, 64),
			imgPos: { offset: new kakao.maps.Point(32, 64) },
		},
	];

	const mapContainer = useRef(null);

	const [Location, setLocation] = useState(null);
	const [Traffic, setTraffic] = useState(false);

	const [MarkerOptions] = useState(markerOptions);

	const [branch_btns, setBranch_btns] = useState(0);

	const mapOption = {
		center: MarkerOptions[branch_btns].latlng,
		level: 3,
	};

	const markerPosition = MarkerOptions[branch_btns].latlng;

	const imgSrc = MarkerOptions[branch_btns].imgSrc;
	const imgSize = MarkerOptions[branch_btns].imgSize;
	const imgPos = MarkerOptions[branch_btns].imgPos;

	const Image = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);

	const marker = new kakao.maps.Marker({
		position: markerPosition,
		image: Image,
	});

	useEffect(() => {
		mapContainer.current.innerHTML = '';
		const map = new kakao.maps.Map(mapContainer.current, mapOption);
		marker.setMap(map);
		setLocation(map);

		const mapTypeControl = new kakao.maps.MapTypeControl();
		map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

		const zoomControl = new kakao.maps.ZoomControl();
		map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		window.addEventListener('resize', () => map.setCenter(MarkerOptions[branch_btns].latlng));
	}, [branch_btns]);

	useEffect(() => {
		if (!Location) return;
		Traffic
			? Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic, kakao]);

	return (
		<Layout name={'location'} h1name={'CONTACT US'} subtit={'찾아오시는길'}>
			<nav>
				<ul className='branch'>
					{MarkerOptions.map((el, idx) => {
						let isOn = '';
						branch_btns === idx && (isOn = 'on');
						return (
							<li
								key={idx}
								className={isOn}
								onClick={() => {
									setBranch_btns(idx);
									setTraffic(false);
								}}
							>
								{el.title}
								<p>{el.address}</p>
							</li>
						);
					})}
					<button onClick={() => setTraffic(!Traffic)}>
						{/* {!Traffic ? 'Traffic ON' : 'Traffic OFF'} */}
						<FontAwesomeIcon icon={faCar} className='car' />
					</button>
				</ul>
			</nav>

			<div className='upper'>
				<div id='map' ref={mapContainer}></div>
				<div className='QuickJoin'>
					<h2>GET IN TOUCH</h2>
					<form action='' onSubmit={handleSubmit}>
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
												placeholder='Please enter your name'
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
												placeholder='Please enter email'
												value={Val.email}
												onChange={handleChange}
											/>
											<p className='err'>{Err.email}</p>
										</td>
									</tr>
									<tr>
										<th colSpan={2}>
											<input type='checkbox' name='agree' id='agree' onChange={handleAgree} />
											<label htmlFor='agree'>Agree with this contract </label>
											<p className='err'>{Err.agree}</p>
											<input type='submit' value='SUBMIT' />
										</th>
									</tr>
								</tbody>
							</table>
						</fieldset>
					</form>
				</div>
			</div>

			<div className='contbox'>
				<article>
					<FontAwesomeIcon icon={faLocationDot} className='loct' />
					<h3>OPEN EVERY DAY</h3>
					<p>
						Monday-Friday : 6am - 5pm
						<br />
						Weekend : 9am - 2pm
					</p>
				</article>
				<article>
					<FontAwesomeIcon icon={faPhone} className='phone' />
					<h3>CALL US</h3>
					<p>
						서울본점 02-258-4892
						<br />
						천안지점 041-321-5582
					</p>
				</article>
				<article>
					<FontAwesomeIcon icon={faEnvelope} className='env' />
					<h3>EMAIL US</h3>
					<p>MMAart@naver.com</p>
				</article>
			</div>
		</Layout>
	);
}

export default Location;
