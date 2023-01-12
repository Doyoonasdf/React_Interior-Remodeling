import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

function Footer() {
	return (
		<>
			<footer id='footer'>
				<div className='inner'>
					<div className='footerWrap'>
						<div className='firstBox'>
							<h1>MMA</h1>
						</div>

						<div className='secondBox '>
							<strong>MORE SNS</strong>
							<ul className='footerSns'>
								<li>
									<FontAwesomeIcon icon={faYoutube} className='youtube' />
								</li>
								<li>
									<FontAwesomeIcon icon={faTwitter} className='twitter' />
								</li>
								<li>
									<FontAwesomeIcon icon={faSpotify} className='spotify' />
								</li>
							</ul>
							<address>343, Apgujeong-ro, Gangnam-gu, Seoul</address>
						</div>
						<div className='thirdBox'>
							<p>MMAart@naver.com</p>
							<p>Copyright &copy; 2023 MMA ALL Right reserved</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
