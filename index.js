const express = require('express');

const app = express();

app.get('', (request, response) => {
    console.log('Hello');
    response.send('Hello');
});
app.listen(4000, () => {
    console.log('App is running...');
});