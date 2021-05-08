import express = require('express');
const app = express();

app.use('/', listener);

app.listen(8000, function() {
    console.log('Running server...');
});

function listener(req: any, res: any): void {
    res.send('Hello World!');
}