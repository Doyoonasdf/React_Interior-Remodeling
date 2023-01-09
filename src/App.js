import { Route, Switch } from 'react-router-dom';
import { useRef } from 'react';
//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
//main
import Main from './components/main/Main';

//sub
import Community from './components/sub/Community';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Location from './components/sub/Location';
import Join from './components/sub/Join';
import Youtube from './components/sub/Youtube';
import Result from './components/sub/Result';
import Result2 from './components/sub/Result2';

import './scss/style.scss';

function App() {
	const menuOpen = useRef(null);
	return (
		<>
			<Switch>
				<Route exact path='/' render={() => <Main menuOpen={menuOpen} />} />
				<Route path='/' render={() => <Header type={'sub'} menuOpen={menuOpen} />} />
			</Switch>

			<Route path='/community' component={Community} />
			<Route path='/department' component={Department} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/join' component={Join} />
			<Route path='/location' component={Location} />
			<Route path='/result' component={Result} />
			<Route path='/result2' component={Result2} />
			<Route path='/youtube' component={Youtube} />
			<Footer />

			<Menu ref={menuOpen} />
		</>
	);
}

export default App;
