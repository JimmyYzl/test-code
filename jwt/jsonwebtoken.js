const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const secretOrPrivateKey = "qweasdzxc";

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/login', (req, res) => {
  const body = req.body;
  var token = jwt.sign(body, secretOrPrivateKey, {
      expiresIn: 60
  });
  res.json({"status": "ok", "token": token, "body": body});
})

app.get('/api/jiema', (req, res) => {
  console.log(req.headers.authorization);
  jwt.verify(token, secret, function (err, decoded) {
    if (!err){
          console.log(decoded.name);  //会输出123，如果过了60秒，则有错误。
          res.json();
     }
})
})

app.use('/frontend', express.static('./html'));
app.listen(3000);