var assert = require('assert');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testDB');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  // 创建模型
  var Tim = mongoose.model('Tim', StudentSchema);
  // 实例化模型
  var student1 = new Tim({name: 'tim', age: 23, living: true});
  // 存入数据库
  // student1.save((err, r) => {
  //   assert.equal(null, err);
  //   r.dowork();
  // })

  // 读取数据
  Tim.find({name: 'tim'}, (err, r) => {
    assert.equal(null, err);
    console.log(r);
  })
});

// 创建Schema 相当于数据库数据骨架
var StudentSchema = mongoose.Schema({
  name: String,
  age: Number,
  living: Boolean
});
// 给骨架继承方法
StudentSchema.methods.dowork = function () {
  console.log(`${this.name} 爱做作业！`);
}
