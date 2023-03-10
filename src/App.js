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

//redux
import { fetchYoutube } from './redux/youtubeSlice';
import { fetchFlickr } from './redux/flickrSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
	const dispatch = useDispatch();
	const menuOpen = useRef(null);

	useEffect(() => {
		dispatch(fetchYoutube());
		dispatch(fetchFlickr({ type: 'user', user: '197355893@N03' }));
	}, [dispatch]);

	return (
		<>
			<Switch>
				<Route exact path='/' render={() => <Main />} />
				<Route path='/' render={() => <Header type={'sub'} />} />
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

			<Menu />
		</>
	);
}

export default App;
