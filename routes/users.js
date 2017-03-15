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

} 