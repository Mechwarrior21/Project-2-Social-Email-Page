var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

var appid = '';
var appSecret = '';
var callback = 'http://localhost:3000/auth/google/callback';

var User = require('../models/user');

module.exports = function (passport) {
    
    passport.use("google", new GoogleStrategy({
        consumerKey: appid,
	    consumerSecret: appSecret,
	    callbackURL: callback,
        profileFields: ['id', 'emails', 'username', 'link']
    },

    function(token, tokenSecret, profile, done) {
        
        console.log("googleProfile", profile);
        
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return done(err, user);
        });
        }            
    ));
}