import { auth, provider } from '../firebase';
import './Auth.css';

const Auth = () => {
	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	return (
		<div className='login'>
			<div className='login-container'>
				<div className='login-text'>Node-Chat</div>
				<button className='login-btn' onClick={signIn}>
					Sign In With Google
				</button>
			</div>
		</div>
	);
};

export default Auth;
