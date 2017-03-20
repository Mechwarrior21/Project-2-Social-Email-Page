const User = require('../models/user');

module.exports = function(app, passport){

	app.get('http://127.0.0.1:3000/auth/twitter', passport.authenticate('twitter', { scope: 'email'})); 

	app.get('/auth/twitter/callback', passport.authenticate('twitter', {
		successRedirect:'/',
		failureRedirect:'/login'

	}));

    app.get('/auth/google', passport.authenticate('google', { scope: ['http://mail.google.com', 'https://www.googleapis.com/auth/gmail.readonly'] })); 

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