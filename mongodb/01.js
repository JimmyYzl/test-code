var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var url = 'mongodb://localhost:27017/testDB';

MongoClient.connect(url, (err, db) => {
    assert.equal(null, err);

    db.close();
})