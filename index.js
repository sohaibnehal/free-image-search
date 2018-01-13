
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './client/build')));

//Requiring all the APIs
require('./server/apiV1')(app);

// Serving client side app.

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});