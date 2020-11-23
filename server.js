// Imports
const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

// App config
const app = express();
const port = process.env.PORT || 8080;
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when client connects
io.on('connection', (socket) => {
	// Message to welcome initial user
	socket.emit('message', 'Welcome to node-chat');

	// Broadcast when a user connects
	socket.broadcast.emit('message', 'A user has joined the chat');

	// Runs when a client disconnects
	socket.on('disconnect', () => {
		io.emit('message', 'A user has left the chat');
	});

	// Listen for chatMessage
	socket.on('chatMessage', (msg) => {
		io.emit('message', msg);
	});
});

// App listening
server.listen(port, () => {
	console.log(`Node is running on port ${port}`);
});
