var express = require('express');
var router = express.Router();
var User = require('../models/user')

var Twitter = require('twitter')

var client = new Twitter({
    consumer_key: '2XqnFyoPyYhrVqPtcOt7JYwpw',
    consumer_secret: 'npg243Jr9Bo28w6z0KYLFArxkKzifdVzwzlfDRLTNFmOlLeZQ8',
    access_token_key: '191817530-QJYzXhymqlzcPK2mGNroiUlS9O2SIm6JGiXEh6Zx',
    access_token_secret: '5VdLcf4weDl04t4xfZuqZYjJ3wSauvOQMrNrc2xbJQJHq'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*router.get('/', function(req, res, next){
    client.get('statuses/home_timeline', function(error) {
        if(!error){
            res.status(200).render('index', {title: 'Express', tweets: tweets});
            console.log(tweets);
        } else {
            res.status(500).json({error: error});
        }
        
        $('#twitter').on('click', '#refreshTwitter', function(event){
            var feed = '<li>' + tweets + '</li>'
            $('#feed').append(feed);
        });
    });
});*/

module.exports = router;