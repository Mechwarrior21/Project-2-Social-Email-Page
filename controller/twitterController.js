var express = require('express');
var router = express.Router();
var User = require('../models/user');

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: '2XqnFyoPyYhrVqPtcOt7JYwpw',
    consumer_secret: 'npg243Jr9Bo28w6z0KYLFArxkKzifdVzwzlfDRLTNFmOlLeZQ8',
    access_token_key: '191817530-QJYzXhymqlzcPK2mGNroiUlS9O2SIm6JGiXEh6Zx',
    access_token_secret: '5VdLcf4weDl04t4xfZuqZYjJ3wSauvOQMrNrc2xbJQJHq'
});

client.get('statuses/home_timeline', function(error, tweets, response) {
    if(error) throw error;
});

module.export = router;