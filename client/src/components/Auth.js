import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import './Auth.css';

const Auth = () => {
	const [, dispatch] = useStateValue();
	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((res) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: res.user
				});
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
