const express = require('express');
const router = express.Router();
const user = require('../model/user');

router.post('/users', (req, res) => {
  console.log(req.body.email);
  console.log(req.body.username);
  console.log(req.body.password);
  let newUser = new user();

  newUser.email = req.body.email;
  newUser.username = req.body.username;
  newUser.password = req.body.password || '';
  console.log('before', newUser.password);

  if(req.body.email == null || req.body.email == '' || req.body.username == null || req.body.username == '') {

  }
  newUser.save((err) => {
    if(err) {
      res.send('email exists already!');
    }else {
      console.log('after save', newUser.password);
      res.send('user is created!');
    }
  });
})


module.exports = router;
