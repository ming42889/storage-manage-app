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
        }, error => { console.log(error) });
});


app.route('/api/create-customsItem').post((req, res) => {
    console.log(req.body)
    const customsItem = new api.CustomsItem(req.body);
    customsItem.save().then(
        result => {
            console.log(result)
            res.send(200, result);
        }, error => { console.log(error) });
});

app.route('/api/create-customsInfo').post((req, res) => {
    console.log(req.body)
    const request = new api.CustomsItem(req.body);
    let customs_items = [];
    request.customsItems.forEach(item => {
        customs_items.push(new api.CustomsItem(item))
    });

    let customs_info = new api.CustomsInfo(request.customsInfo);
    customs_info.customs_items = customs_items;
    customs_info.save().then(
        result => {
            console.log(result)
            res.send(200, result);
        }, error => {
            console.log(error);
            error.error.error.errors.forEach(e => console.log(e))
        });
});


app.route('/api/create-parcel').post((req, res) => {
    console.log(req.body)
    const parcel = new api.Parcel(req.body);
    parcel.save().then(
        result => {
            console.log(result)
            res.send(200, result);
        }, error => { console.log(error) });
});

app.route('/api/create-shipment').post((req, res) => {
    console.log(req.body)
    const request = new api.Parcel(req.body);
    const toAddress = new api.Address(request.toAddress);
    const fromAddress = new api.Address(request.fromAddress);
    const parcel = new api.Parcel(request.parcel);

    let customsInfo = null;
    if (request.isInternational) {
        let customs_items = [];
        request.customsItems.forEach(item => {
            customs_items.push(new api.CustomsItem(item))
        });

        customsInfo = new api.CustomsInfo(request.customsInfo);
        customsInfo.customs_items = customs_items;
    }
    const shipment = new api.Shipment({
        to_address: toAddress,
        from_address: fromAddress,
        parcel: parcel,
        customs_info: customsInfo
    });
    shipment.save().then(
        result => {
            console.log(result)
            res.send(200, result);
        }, error => { console.log(error) });
});

app.get('/api/regenerate-rates/:id', function (req, res, next) {
    console.log('The id: ' + req.params.id);
    const shipmentId = req.params.id;
    api.Shipment.retrieve(shipmentId).then(s => {
        s.regenerateRates()
            .then(s => {
                console.dir(s.rates, {
                    depth: null,
                });
                res.send(200, result);
            }, error => { console.log(error) });
    });
});

app.route('/api/buy-shipment').post((req, res) => {
    console.log(req.body)
    const request = req.body;
    api.Shipment.retrieve(request.shipmentId).then(s => {
        s.buy(request.selectedRate, request.insurance).then(
            result => {
                console.log(result)
                res.send(200, result);
            }, error => { console.log(error) }
        );
    });
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/storage-manage-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
// app.listen(4200);