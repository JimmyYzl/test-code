## mongoDB学习(3.0)
-------------

- 初始化mongo

``MongoClient = require('mongodb').MongoClient``

- 连接数据库

```
// 如果数据库省略默认链接test数据库
var url = 'mongodb://localhost:27017';
var dbName = 'testDB';
MongoClient.connect(url, (err, client){
  const db = client.db(dbName);
})
```

- 断开连接

``client.close()``

- 选择文档集合

``db.collection(collectionName)``

- 插入数据

```
// 插入一条数据
collection.insertOne({a: 1}, (err, r) => {

})

// 插入多条数据
collection.insertMany([{a: 1, a: 2}], (err, r) => {

})
```

-  更新数据

```
// 在所有a=1的数据后追加b:2
collection.updateOne({a:  1}, {$set: {b: 2}}, {multi: true}, (err, r) => {

});

// 修改所有匹配数据
collection.updateMany({a:  1}, {$set: {b: 2}}, (err, r) => {

});
```

- 删除数据

```
// 删除一条数据
collection.deleteOne({a: 1}, (err, r) => {

});

// 删除多条数据
collection.deleteMany({a: 1), (err, r) => {
    
})
```

- 查询数据

```
collection.find({a: 1}).linit(2).toArray((err, docs) => {
    
})
// 查询分页
collectionName.find({}).skip(0).limit(10).each((err, doc) => {
    
})
```
