var fs = require('fs');
var express = require('express');
var formidable  = require('formidable');
var path = require("path");

var fs = require('fs');
var upload = require('./upload');

var app = express();

// 单图上传
app.post('/upload', function(req, res){

    var form = new formidable.IncomingForm();
    form.uploadDir = "./img";
    form.parse(req, function(err, fields, files) {
      var extname = path.extname(files.file.name);
      var oldpath = __dirname + "/" + files.file.path;
      // var newpath = __dirname + "/img/" + (new Date()).getTime() + extname;
      
      var key=(new Date()).getTime() + extname;
      // 文件上传
      function cd(respErr,respBody, respInfo) {
        if (respErr) {
          throw respErr;
        }
        if (respInfo.statusCode == 200) {
          console.log(respBody);
          fs.unlink(oldpath, (err) => {
            if (err) throw err;
            console.log('成功删除 /tmp/hello');
          });
        } else {
          console.log(respInfo.statusCode);
          console.log(respBody);
        }
        res.json({"status": "ok"});
      };
      upload(key, oldpath, cd);
    });
});

app.use(express.static('./view'));

app.listen(3333);