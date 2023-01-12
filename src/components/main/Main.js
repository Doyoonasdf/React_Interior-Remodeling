import Header from '../common/Header';
import Information from './Information';
import Services from './Services';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Scroll from './Scroll';
import { useState, useEffect } from 'react';

function Main({ menuOpen }) {
	const [Scrolled, setScrolled] = useState(0);
	const [Pos, setPos] = useState([]);

	return (
		<main>
			<Header type={'main'} menuOpen={menuOpen} />
			<Visual currentPos={Pos[0]} />
			<Information Scrolled={Scrolled} currentPos={Pos[1]} />
			<Services currentPos={Pos[2]} />
			<Pics currentPos={Pos[3]} />
			<Vids currentPos={Pos[4]} />
			<News Scrolled={Scrolled} currentPos={Pos[5]} />
			<Scroll setScrolled={setScrolled} setPos={setPos} />
		</main>
	);
}
export default Main;
