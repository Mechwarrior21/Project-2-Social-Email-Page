var express = require('express');
var router = express.Router();
var User = require('../models/user');

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'Wv0W852SJ8IdyF4XEGOw9AoAf',
    consumer_secret: '6NtldLsFlsGGqjBmuON7e6kUTQvRx6poNQlfqJPHJllaT2uUSl',
    access_token_key: '191817530-kH8gZg7SzMv025COCJookozH4hb0KVNTHWkm6uNd',
    access_token_secret: 'ucuvsvCTX21O6VZBtM5prKXrjGtEQjAe3JCPyEMCuYflj'
});

client.get('statuses/home_timeline', function(error, tweets, response) {
    if(error) {
        throw error
    } else {
        console.log(tweets)
    }
});

module.export = router;
