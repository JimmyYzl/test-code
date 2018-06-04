###mongoDB学习


- 初始化mongo

``MongoClient = require('mongodb').MongoClient``

- 连接数据库

```
// 如果数据库省略默认链接test数据库
var url = 'mongodb://localhost:27017/myproject';
MongoClient.connect(url, (err, db) = {

})
```

- 断开连接

``db.close()``

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