import './Auth.css';

const Auth = () => {
	// const signIn = () => {
	//   console.log('Here');
	// };
	return (
		<div className='login'>
			<div className='login-container'>
				<div className='login-text'>Node-Chat</div>
				<button className='login-btn'>
					{/*<button className='login-btn' onClick={signIn}>*/}
					Sign In With Google
				</button>
			</div>
		</div>
	);
};

export default Auth;
