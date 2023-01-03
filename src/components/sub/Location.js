import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../common/Layout';
function Location() {
	const { kakao } = window;
	const markerOptions = [
		{
			title: '서울본점',
			latlng: new kakao.maps.LatLng(37.5308096, 126.8983384),
			imgSrc: `${process.env.PUBLIC_URL}/img/location_logo1.png`,
			imgSize: new kakao.maps.Size(64, 64),
			imgPos: { offset: new kakao.maps.Point(32, 64) },
		},
		{
			title: '동탄지점',
			latlng: new kakao.maps.LatLng(37.2099594, 127.097195),
			imgSrc: `${process.env.PUBLIC_URL}/img/location_logo1.png`,
			imgSize: new kakao.maps.Size(64, 64),
			imgPos: { offset: new kakao.maps.Point(32, 64) },
		},
		{
			title: '안양지점',
			latlng: new kakao.maps.LatLng(37.3744782, 126.9486063),
			imgSrc: `${process.env.PUBLIC_URL}/img/location_logo1.png`,
			imgSize: new kakao.maps.Size(64, 64),
			imgPos: { offset: new kakao.maps.Point(32, 40) },
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
		// 1.편의기능 추가해보자 => 샘플: 지도에 컨트롤 올리기(지도보기,스카이뷰보기)

		//1. 상단오른쪽에 들어가진다
		const mapTypeControl = new kakao.maps.MapTypeControl();
		map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

		//2. 편의기능 추가해보자 (지도 확대축소 제어)
		const zoomControl = new kakao.maps.ZoomControl();
		map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		window.addEventListener('resize', () => map.setCenter(MarkerOptions[branch_btns].latlng));
	}, [branch_btns]);

	useEffect(() => {
		if (!Location) return;
		Traffic
			? Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic]);

	return (
		<Layout name={'location'} h1name={'CONTACT US'} subtit={'찾아오시는길'}>
			<div id='map' ref={mapContainer}></div>

			<ul className='traffic'>
				<li onClick={() => Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)}>
					<Link to='#'>교통정보 보기</Link>
				</li>
				<li onClick={() => Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)}>
					<Link to='#'>교통정보 끄기</Link>
				</li>
			</ul>

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
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}

export default Location;
