const express = require('express');
const port = 8000;

const app = express();

const message = `<h1>Hello World! How are you?</h1>`
app.get('/', (req, res) => {
    res.send(message);
})

app.listen(port, () => 'server listening on port', port);