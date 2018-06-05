var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
  username: String,
  password: String,
  date: Date,
  activation: Boolean,
  blogList: [
    {
      title: String,
      main: String,
      isShow: Boolean
    }
  ]
});

var account = mongoose.model('account', accountSchema);

