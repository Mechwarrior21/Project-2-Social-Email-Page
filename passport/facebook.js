var facebookStrategy = require('passport-facebook').Strategy;

var appid = '1461298100561355';
var appSecret = '921980d76c58322a9e57e50c9c24367e';
var callback = "http://localhost:3000/auth/facebook/callback"

var User = require('../models/user')

module.exports = function (passport) {

    passport.use("facebook", new facebookStrategy({
        clientID: appid,
        clientSecret: appSecret,
        callbackURL: callback,
        profileFields: ['id', 'emails', 'name', 'profileUrl']
	},

	function(accessToken, refreshToken, profile, done){
        
        console.log("Facebook Profile", profile);
        
        process.nextTick(function(){
            var email = profile.emails[0].value
            
            User.findOne({'email' : email}, function(err, user){
               if(err){
                   console.log("facebookStrategy: error in database call", err);
                   return done(err);
               }
                if(user){
                    console.log("facebookStrategy: local user found - merging data");
                    
                    user.facebook.accessToken = accessToken;
                    user.facebook.refreshToken = refreshToken;
                    user.facebook.id = profile.id;
                    user.facebook.profile = profile;
                    
                    user.save(function(err, user){
                        return done(null,false);
                    });
                    
                } else {
                    console.log("facebookStrategy: unknown user - create new user");
                    
                    var User = new User();
                    user.email = email;
                    user.pasword = "";
                    user.facebook.accessToken = accessToken;
                    user.facebook.refreshToken = refreshToken;
                    user.facebook.id = profile.id;
                    user.facebook.profile = profile;
                    
                    user.save(function(err, user){
                        return done(null,false);
                    });
                }
            });
        });
    }));
};