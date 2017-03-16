var express = require('express');
var router = express.Router();
var User = require('../model/user');

// Fetch latest 10 emails and show the snippet

var Gmail = require('node-gmail-api')
  , gmail = new Gmail(<KEY>)
  , s = gmail.messages('label:inbox', {max: 10})

s.on('data', function (d) {
  console.log(d.snippet)
})

module.exports = router;