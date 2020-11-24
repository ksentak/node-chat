import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './chat.css';

const Chat = () => {
	return (
		<div className='chat'>
			<body>
				<div className='chat-container'>
					<div className='chat-header'>
						<h1>
							<FontAwesomeIcon icon={faSmile} /> Node-Chat
						</h1>
						<a href='index.html' className='btn'>
							Leave Room
						</a>
					</div>
					<main className='chat-main'>
						<div className='chat-sidebar'>
							<h3>
								<FontAwesomeIcon icon={faComments} /> Room Name:
							</h3>
							<h2 id='room-name'>Test</h2>
							<h3>
								<FontAwesomeIcon icon={faUsers} /> Users
							</h3>
							<ul id='users'></ul>
						</div>
						<div className='chat-messages'>{/* Enter messages here */}</div>
					</main>
					<div className='chat-form-container'>
						<form id='chat-form'>
							<input
								id='msg'
								type='text'
								placeholder='Enter Message'
								required
								autocomplete='off'
							/>
							<button className='btn'>
								<FontAwesomeIcon icon={faPaperPlane} /> Send
							</button>
						</form>
					</div>
				</div>
			</body>
		</div>
	);
};

export default Chat;
