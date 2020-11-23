import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';
import './App.css';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/chat' component={Chat} />
			</Switch>
		</Router>
	);
};

export default App;
