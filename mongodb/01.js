var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var url = 'mongodb://localhost:27017';
var dbName = 'testDB';

MongoClient.connect(url, (err, client) => {
    assert.equal(null, err);
    const db = client.db(dbName);
    console.log('数据库连接成功');
    var collectionName = db.collection('pracrice');
    // collectionName.insertMany([
    //     {username: 'test_1', password: 'admin123'},
    //     {username: 'test_2', password: 'admin123'},
    // ],{
    //     w: 'majority'
    // }, (err, r) => {
    //     console.log(r);
    //     client.close();
    // // })
    // collectionName.updateMany({username: 'test_1'}, {$set: {doc: 'I love U'}}, {upsert: true}, (err, r) => {
    //     assert.equal(null, err);
    //     console.log(r);
    //     client.close();
    // })
    
    collectionName.find({}).skip(1).limit(3).each((err, doc) => {
        if(doc) {
            console.log(doc);
        } else {
            client.close();
        }
    })
})