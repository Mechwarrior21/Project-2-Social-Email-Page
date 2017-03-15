var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var appid = '319045524874-g576nb8igfpj5ma41fdl9g5ldoc936n0.apps.googleusercontent.com';
var appSecret = 'M_Ci4bTixvNifnnC-PKwEa5h';
var callback = 'http://localhost:3000/auth/google/callback';

var User = require('../models/user');

module.exports = function (passport) {
    
    passport.use("google", new GoogleStrategy({
        clientID: appid,
        clientSecret: appSecret,
	    callbackURL: callback
    },

    function(token, tokenSecret, profile, done) {
        
        console.log("googleProfile", profile);
        
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return done(err, user);
        });
        }            
    ));
}