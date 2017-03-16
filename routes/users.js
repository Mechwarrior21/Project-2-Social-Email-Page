module.exports = function(app, passport){

	app.get('/auth/twitter', passport.authenticate('twitter', { scope: 'email'})); 

	app.get('/auth/twitter/callback', passport.authenticate('twitter', {
		successRedirect:'/',
		failureRedirect:'/login'

	}));

    app.get('/auth/google', passport.authenticate('google', { scope: 'email'})); 

	app.get('/auth/google/callback', passport.authenticate('google', {
		successRedirect:'/',
		failureRedirect:'/login'

	}));

    /*var gmail = google.gmail('v1');
    var OAuth2 = google.auth.OAuth2;

    var oauth2Client = new OAuth2('<CLIENT_ID>', '<CLIENT_SECRET>', '<REDIRECT_URL>');
    oauth2Client.setCredentials({ access_token: '<ACCESS_TOKEN_HERE>' });

    app.get('/', function(req, res, next) {
        gmail.users.messages.list({ userId: 'me', auth: oauth2Client },
            function(err, response) {
                res.send(response);
        });
    }*/
    
} 

/*
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '2XqnFyoPyYhrVqPtcOt7JYwpw',
  consumer_secret: 'npg243Jr9Bo28w6z0KYLFArxkKzifdVzwzlfDRLTNFmOlLeZQ8',
  access_token_key: '191817530-82NKJjh2NxqPpr75ke7nV4tL4IoBF1dai7LBGFkS',
  access_token_secret: 'gxFzcNjnlJDhXVZvuXsvHb1UrSqFLOU2hzz1srlZhC1b3'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});*/