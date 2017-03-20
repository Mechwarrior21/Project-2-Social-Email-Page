var express = require('express');
var router = express.Router();
var User = require('../models/user');

// Fetch latest 10 emails and show the snippet

var Gmail = require('node-gmail-api')
  , gmail = new Gmail('ya29.GlwUBOVhh0xQW1wGVjwvnZOy0-KVJJbYSWAuoAH9g1XCUmh1JWsSBeut8FuiJk2G3DoBsUqlKPoWmPvfHyD6aPPmypb2An0oWCuOPizWeNFIy5FTTxibXsxAogjdhQ')
  , s = gmail.messages('label:inbox', {max: 10})

s.on('data', function (d) {
  console.log(d.snippet)
})

module.exports = router;

/*exports.googlemail = function(token){
    var Gmail = require('node-gmail-api')
    , gmail = new Gmail(token)
    , s = gmail.messages('label:inbox', {max: 10})

    s.on('data', function (d) {
        console.log(d.snippet)
    });
};*/