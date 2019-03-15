//Install express server
const express = require('express');
const path = require('path');

const app = express();
const Easypost = require('@easypost/api');
const api = new Easypost('EZTK00355591d38349abaebb48a0d7c3cff90D86XMgZxdGwRloY9kAGVA');


// Serve only the static files form the dist directory
app.use(express.static('./dist/storage-manage-app'));

app.use(express.json())

//cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});

// A default hello word route
app.route('/api').get((req, res) => {
    res.send({ hello: 'world' });
});

app.route('/api/create-address').post((req, res) => {
    console.log(req.body)
    const address = new api.Address(req.body);
    address.save().then(
        result => {
            console.log(result)
            res.send(200, result);
        });
});


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/storage-manage-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
// app.listen(4200);