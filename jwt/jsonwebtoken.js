const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');
const expressJWT = require('express-jwt');

const app = express();
const secretOrPrivateKey = "Yzliang";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressJWT({
  secret: secretOrPrivateKey   
}).unless({
  path: ['/api/login', '/frontend/']  //除了这个地址，其他的URL都需要验证
}));
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {   
      //  这个需要根据自己的业务逻辑来处理（ 具体的err值 请看下面）
    res.status(401).send(err);
  }else{
    next();
  }
});

app.post('/api/login', (req, res) => {
  const body = req.body;
  var token = jwt.sign(body, secretOrPrivateKey, {
      expiresIn: 60
  });
  res.json({"status": "ok", "token": token, "body": body});
})

app.get('/api/jiema', (req, res) => {
  res.json({"status": "ok", "user": req.user});
})

app.use('/frontend', express.static('./html'));
app.listen(3000);