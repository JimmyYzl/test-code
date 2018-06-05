var mongoose = require('mongoose');
var db = require('./db');

var accountSchema = new mongoose.Schema({
  username: String,
  password: String,
  date: Date,
  sex: Number
});

accountSchema.statics.findname = function (name, callback) {
  return this.model('Account').find({username: name}, callback);
}

var accountModel = db.model('Account', accountSchema);

module.exports = accountModel;