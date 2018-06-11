var fs = require('fs');
var express = require('express');
var formidable  = require('formidable');
var path = require("path");

var app = express();

// 单图上传
app.post('/upload', function(req, res){

    var form = new formidable.IncomingForm();
    form.uploadDir = "./img";
    form.parse(req, function(err, fields, files) {
      var extname = path.extname(files.file.name);
      var oldpath = __dirname + "/" + files.file.path;
      var newpath = __dirname + "/img/" + (new Date()).getTime() + extname;
      // //改名
      fs.rename(oldpath,newpath,function(err){
        res.json(files);
      });
    });
});

app.use(express.static('./view'));

app.listen(3333);