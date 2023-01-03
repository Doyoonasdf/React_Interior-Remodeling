import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<>
			<footer id='footer'>
				<div className='inner'>
					<h1>SMK</h1>
					<ul>
						<li>
							<Link to='#'>
								<FontAwesomeIcon icon={faFacebookF} />
							</Link>
						</li>
						<li>
							<Link to='#'>
								<FontAwesomeIcon icon={faTwitter} />
							</Link>
						</li>
						<li>
							<Link to='#'>
								<FontAwesomeIcon icon={faEnvelope} />
							</Link>
						</li>
					</ul>

					<address>
						Address : Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nesciunt!
						<br />
						TEL : +82-032-333-4444 FAX : +82-032-333-4434
					</address>
					<p>Copyright &copy; 2022 SMK ALL Right reserved</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
