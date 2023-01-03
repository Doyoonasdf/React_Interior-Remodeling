import Header from '../common/Header';
import Information from './Information';
import LatestProjects from './LatestProjects';
import Services from './Services';
import Visual from './Visual';

function Main() {
	return (
		<main>
			<Header type={'main'} />
			<Visual />
			<Information />
			<Services />
			<LatestProjects />
		</main>
	);
}
export default Main;
