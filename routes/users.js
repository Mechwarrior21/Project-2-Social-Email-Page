const User = require('../models/user');

module.exports = function(app, passport){

	app.get('http://127.0.0.1:3000/auth/twitter', passport.authenticate('twitter', { scope: 'email'})); 

	app.get('/auth/twitter/callback', passport.authenticate('twitter', {
		successRedirect:'/',
		failureRedirect:'/login'

	}));

    app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login',
                                                                      'https://www.googleapis.com/auth/plus.profile.emails.read',
                                                                      'https://www.googleapis.com/auth/gmail.readonly'] })); 

	app.get('/auth/google/callback', passport.authenticate('google', {
		successRedirect:'/',
		failureRedirect:'/login'

	}));

} 