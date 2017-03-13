module.exports = function(app, passport){

	app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email'}));
    
	app.get('/auth/facebook/callback', passport.authenticate('facebook', {
		successRedirect: '/secret',
		failureRedirect: '/error'

	}));
	
	/*app.get('/auth/twitter', passport.authenticate('twitter')); 

	app.get('./auth/twitter/callback', passport.authenticate('twitter', {
		successRedirect:'/secret',
		failureRedirect:'/error'

	}));*/


} 