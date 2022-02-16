const express = require('express');
var cors = require('cors')
const app = express();
const port = 3001;
const MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use("/",express.static('pub'));

//var url = 'mongodb://admin:password@localhost:27017';
var url = 'mongodb://admin:password@mongodb_kontti'

app.get('/', (req, res) => {
  console.log("/ haettu")
  console.log("dirname on :"+__dirname)
  res.sendFile(__dirname + '/pub/index.html')
//  res.send('Hello World!')
})

app.get('/hae', (req,res) => {
    console.log("/hae kutsuttu")
    MongoClient.connect(url, function(err, client) {
        if(err) throw err;

        var db = client.db("viestit")
        var collection = db.collection("viesti");    
       // var myCursor = collection.find( );
        
//        myCursor.forEach(console.dir);

        collection.find().toArray(function(err, docs) {
          return res.json(docs);
        });
    });
})


app.get("/init", function(req,res) {
console.log("/init kutsuttu")
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;

    var db = client.db("viestit")    
    db.collection("viesti").insertOne({data:'Matille syntymäpäivää!'});
    db.collection("viesti").insertOne({data:'Hyvä Iivo!'});
    db.collection("viesti").insertOne({data:'Tanssitaan Jaana!'});

      // Wait for a second before finishing up, to ensure we have written the item to disk
    setTimeout(function() {
      // Fetch the document
      db.collection("viesti").findOne({data:'Tanssitaan Jaana!'}, function(err, item) {
        assert.equal(null, err);
        console.dir(item)
        assert.equal('Tanssitaan Jaana!', item.data);
        console.log("kaikki ok")
        res.json({ a: 1 });;
        client.close();
      })
    }, 100);
  });
  // */
})


app.post('/talleta',function(req,res){
  console.log("/talleta kutsuttu")
  console.dir(req.body)
  var lause = req.body.lause;
  var response = res;

  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    var db = client.db("viestit")
    var collection = db.collection("viesti");    


    db.collection("viesti").insertOne({data:lause});

    // Wait for a second before finishing up, to ensure we have written the item to disk
    setTimeout(function() {

      // Fetch the document
      db.collection("viesti").findOne({data:lause}, function(err, item) {
        assert.equal(null, err);
        console.dir(item)
        assert.equal(lause, item.data);
        console.log("Lause ->"+lause+"<- tallennettu kantaan.")
        res.sendStatus(200)//({ "lause":lause });;
        client.close();
      })
    }, 100);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});