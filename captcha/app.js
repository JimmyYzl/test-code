const express = require('express');
const app = express();
const svgCaptcha = require('svg-captcha');
const session = require('express-session');

app.use(session({
  secret: 'love',
  resave: false,
  saveUninitialized: true
}))
app.get('/captcha', function (req, res) {
  var captcha = svgCaptcha.create({ fontSize: 50, width: 100 });
  req.session.captcha = captcha.text.toLowerCase();
  res.setHeader('Content-Type', 'image/svg+xml');
  res.write(String(captcha.data));
  res.end();
});

app.get('/api/tijiao', (req, res) => {
  if(req.session.captcha === req.query.code.toLowerCase()) {
    res.status(200).send({"status": 'ok'});
  } else {
    res.send({"status": "验证码错误"});
  }
});

app.use('/frontend', express.static('./html'));
app.listen(3000, () => {
  console.log('http://127.0.0.1:3000/frontend');
})