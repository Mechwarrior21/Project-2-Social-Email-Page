var express = require('express');
var router = express.Router();
var User = require('../models/user');

// Fetch latest 10 emails and show the snippet

var Gmail = require('node-gmail-api')
  , gmail = new Gmail('ya29.GmEVBGpq-x6jwGJlnf7PfwgMP2kTiin-xdLauFv-yaIJIi_i4E-E30QI0ACliwV35YTtmf7MRFFyGvJ-_6R7oay3-N-P-erIFmOywez0v6wWImoCf5pNuHrmXqjYEj9ANhsx')
  , s = gmail.messages('label:inbox', {max: 10})

s.on('data', function (d) {
  console.log(d.snippet)
})

module.exports = router;