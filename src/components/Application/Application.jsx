import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
function Application() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" component={Home} />
				</Switch>
			</Router>
		</div>
	);
}
export default Application;
