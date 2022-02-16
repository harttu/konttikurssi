
app.get('/viesti',function(req,res){
    var response = res;
    MongoClient.connect("mongodb://admin:password@localhost:27017", function(err,client) {
      if(err) throw err;
      var db = client.db("user-account");
      var query = {userid:1}
      db.collection('users').findOne(query, function(err,result) {
        if(err) throw err;
        client.close();
        response.send(result);
      });
    });
  });
  