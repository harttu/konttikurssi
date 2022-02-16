var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
//var printjson = require('printjson');

var url = 'mongodb://admin:password@localhost:27017';

if(false) {
    MongoClient.connect(url, function(err, client) {
        console.log("Connected");
        var db = client.db('viestit');
        client.close();
    });
}

if(false){
    MongoClient.connect(url, function(err, client) {
        if(err) throw err;

        //console.dir(db)
        var db = client.db("viestit")
        
        db.collection("viesti").insertOne({hello:'Matille syntymäpäivää!'});

        /*
        cursor.each(function(err, doc) {

            console.log(doc);

        });*/
    });
    // */
}

if(!false){
    MongoClient.connect(url, function(err, client) {
        if(err) throw err;

        //console.dir(db)
        var db = client.db("viestit")
        var collection = db.collection("viesti");    
        // Peform a simple find and return all the documents
       
        var myCursor = collection.find( );
        
        myCursor.forEach(console.dir);

        /*
        collection.find({}, {explain:true}).toArray(function(err, docs) {
            assert.equal(null, err);
            assert.equal(1, docs.length);
            console.dir(docs)
            client.close();
        });
        // */
    });
}
