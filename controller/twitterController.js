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
    console.log(tweets);
});

/*exports.twitterfeed = function(token, tokenSecret){
    
    var Twitter = require('twitter');
    
    var client = new Twitter({
        consumer_key: token,
        consumer_secret: tokenSecret,
        access_token_key: '191817530-QJYzXhymqlzcPK2mGNroiUlS9O2SIm6JGiXEh6Zx',
        access_token_secret: '5VdLcf4weDl04t4xfZuqZYjJ3wSauvOQMrNrc2xbJQJHq'
    });
    
    client.get('statuses/home_timeline', function(error, tweets, response) {
        if(error) throw error;
        console.log(tweets); 
        console.log(response);
    });
};*/

                   /* window.twttr = (function(d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0],
                        t = window.twttr || {};
                        if (d.getElementById(id)) return t;
                        js = d.createElement(s);
                        js.id = id;
                        js.src = "https://platform.twitter.com/widgets.js";
                        fjs.parentNode.insertBefore(js, fjs);
                        t._e = [];
                        t.ready = function(f) {
                        t._e.push(f);
                        };
                        return t;
                        }(document, "script", "twitter-wjs"));*/