import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
	return (
		<div className='home'>
			<div className='join-container'>
				<div className='join-header'>
					<h1>
						<FontAwesomeIcon icon={faSmile} /> Node-Chat
					</h1>
				</div>
				<div className='join-main'>
					<form action='/chat'>
						<div className='form-control'>
							<label for='username'>Username</label>
							<input
								type='text'
								name='username'
								id='username'
								placeholder='Enter username...'
								required
							/>
						</div>
						<div className='form-control'>
							<label for='room'>Room</label>
							<select name='room' id='room'>
								<option value='JavaScript'>JavaScript</option>
								<option value='Python'>Python</option>
								<option value='PHP'>PHP</option>
							</select>
						</div>
						<button type='submit' className='btn'>
							Join Chat
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Home;
