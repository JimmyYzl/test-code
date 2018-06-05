var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/testDB');
// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   var Animal = mongoose.model('Animal', animalSchema);
  
//   var dog = new Animal({name: 'xiaobai', type: 'dog'});
//   dog.save((err, r) => {
//     console.log('ok');
//     dog.findType((err, r) => {
//       console.log(r);
//     })
//   });

// })
// var animalSchema = new Schema({name: String, type: String});

// animalSchema.methods.findType = function (cd) {
//   return this.model('Animal').find({type: this.type}, cd);
// }

var myModel = mongoose.model('Animal', new Schema({name: String}));

myModel.findOne((err, r) => {
  console.log(r);
})
