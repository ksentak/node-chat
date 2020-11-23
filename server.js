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
	console.log('New web socket connection...');
});

// App listening
server.listen(port, () => {
	console.log(`Node is running on port ${port}`);
});
