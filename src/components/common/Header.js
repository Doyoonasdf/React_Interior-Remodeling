import { Link, NavLink } from 'react-router-dom';

function Header({ type }) {
	const active = {};
	return (
		<header id='header' className={`scroll_view on ${type}`}>
			<div className='inner'>
				<h1>
					<Link to='/'>SMK</Link>
				</h1>
				<nav className='menuWeb'>
					<ul id='gnb'>
						<li>
							<NavLink to='/'>HOME</NavLink>
						</li>
						<li>
							<NavLink to='/department'>DEPARTMENT</NavLink>
						</li>
						<li>
							<NavLink to='/join'>JOIN</NavLink>
						</li>
						<li>
							<NavLink to='/gallery'>GALLERY</NavLink>
						</li>
						<li>
							<NavLink to='/community'>COMMUNITY</NavLink>
						</li>
						<li>
							<NavLink to='/location'>CONTACT</NavLink>
						</li>
						<li>
							<NavLink to='/youtube'>YOUTUBE</NavLink>
						</li>
					</ul>
				</nav>

				<Link to='#' className='btnCall'>
					<span>메뉴호출</span>
				</Link>

				<nav className='menuMo'>
					<h1>
						<Link to='/'>SMK</Link>
						<span>INTERIOR DESIGN STUDIO</span>
					</h1>
					<ul id='gnbMo'>
						<li>
							<NavLink to='/'>HOME</NavLink>
						</li>
						<li>
							<NavLink to='/department'>DEPARTMENT</NavLink>
						</li>
						<li>
							<NavLink to='/join'>JOIN</NavLink>
						</li>
						<li>
							<NavLink to='/gallery'>GALLERY</NavLink>
						</li>
						<li>
							<NavLink to='/community'>COMMUNITY</NavLink>
						</li>
						<li>
							<NavLink to='/location'>CONTACT</NavLink>
						</li>
						<li>
							<NavLink to='/youtube'>YOUTUBE</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
