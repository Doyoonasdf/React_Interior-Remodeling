import { Link, NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { toggle } from '../../redux/menuSlice';
import { useSelector, useDispatch } from 'react-redux';

function Header(props) {
	const active = { color: 'rgba(235, 213, 69, 0.989)' };
	const dispatch = useDispatch();
	const menu = useSelector((store) => store.menu.open);

	return (
		<>
			<header className={props.type}>
				<div className='inner'>
					<h1>
						<NavLink exact to='/' activeStyle={active}>
							MMA
						</NavLink>
					</h1>

					<ul id='gnb'>
						<li>
							<NavLink to='/department' activeStyle={active}>
								Department
							</NavLink>
						</li>

						<li>
							<NavLink to='/community' activeStyle={active}>
								Community
							</NavLink>
						</li>

						<li>
							<NavLink to='/gallery' activeStyle={active}>
								Gallery
							</NavLink>
						</li>
						<li>
							<NavLink to='/youtube' activeStyle={active}>
								Youtube
							</NavLink>
						</li>

						<li>
							<NavLink to='/join' activeStyle={active}>
								Membership
							</NavLink>
						</li>

						<li>
							<NavLink to='/location' activeStyle={active}>
								Location
							</NavLink>
						</li>
					</ul>

					<Link
						to='#'
						className={menu ? 'btnCall on' : 'btnCall'}
						onClick={() => {
							dispatch(toggle());
						}}
					>
						<span>메뉴호출</span>
					</Link>
				</div>
			</header>
		</>
	);
}

export default Header;
