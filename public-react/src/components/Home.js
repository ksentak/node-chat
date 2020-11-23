import './home.css';

const Home = () => {
	return (
		<div className='home'>
			<body>
				<div className='join-container'>
					<header className='join-header'>
						<h1>
							<i className='fas fa-smile'></i> Node-Chat
						</h1>
					</header>
					<main className='join-main'>
						<form action='chat.html'>
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
					</main>
				</div>
			</body>
		</div>
	);
};

export default Home;
