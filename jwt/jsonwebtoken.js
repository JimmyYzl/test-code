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

app.use('/frontend', express.static('./html'));
app.listen(3000);