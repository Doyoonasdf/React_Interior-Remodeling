import Header from '../common/Header';
import Information from './Information';
import LatestProjects from './LatestProjects';
import Services from './Services';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Scroll from './Scroll';
import { useState, useEffect } from 'react';

function Main() {
	const [Scrolled, setScrolled] = useState(0);
	const [Pos, setPos] = useState([]);

	return (
		<main>
			<Header type={'main'} />
			<Visual />
			<Information Scrolled={Scrolled} currentPos={Pos[0]} />
			<Services />
			<News Scrolled={Scrolled} currentPos={Pos[2]} />
			<LatestProjects />
			<Pics />
			<Vids />
			<Scroll setScrolled={setScrolled} setPos={setPos} />
		</main>
	);
}
export default Main;
