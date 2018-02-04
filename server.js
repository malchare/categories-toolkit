const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));
app.use(express.static('public'));
app.listen(port, () => console.log('App listening on port 8000 ...'));