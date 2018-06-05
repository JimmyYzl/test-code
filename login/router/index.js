var router = require('express').Router(),
    bodyParser = require('body-parser'),
    assert = require('assert'),
    accountModel = require('../model/AccountModel');

router.use(bodyParser.urlencoded({extended: false}));

router.post('/register', (req, res) => {
  console.log(req.body);
  accountModel.findname(req.body.username, (err, r) => {
    if(err) {
      res.send(err);
    }
    if(!r || r.length == 0) {
      (new accountModel(req.body)).save((err, r) => {
        if(err) {
          res.send(err);
        }
        res.json({"status": "ok"});
      })
    } else {
      res.json({"status": "error", "code": "账号重复"});
    }
  })
});

module.exports = router;

