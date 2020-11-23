// Imports
const express = require('express');

// App config
const app = express();
const port = process.env.PORT || 8080;

// App listening
app.listen(port, () => {
	console.log(`Node is running on port ${port}`);
});
