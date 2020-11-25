import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Chat from './components/Chat';

const App = () => {
	const [user, setUser] = useState('null');
	return (
		<>
			{!user ? (
				<Login />
			) : (
				<div className='app-body'>
					<Router>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/chat' component={Chat} />
						</Switch>
					</Router>
				</div>
			)}
		</>
	);
};

export default App;
