import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Home from './components/Home';
import Chat from './components/Chat';
// import './App.css';

const App = () => {
	const [user, setUser] = useState('null');
	return (
		<>
			{!user ? (
				<Auth />
			) : (
				<Router>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/chat' component={Chat} />
					</Switch>
				</Router>
			)}
		</>
	);
};

export default App;
