global.bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb',
  parameterLimit: 100000
}))
app.use(bodyParser.json({
  limit: '50mb',
  parameterLimit: 100000
}))


app.post('/stored', (req, res) => {
    console.log(req.body);
    db.collection('quotes').insertOne(req.body, (err, data) => {
        if(err) return console.log(err);
        res.send(('saved to db: ' + data));
    })
});