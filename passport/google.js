var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var appid = '319045524874-g576nb8igfpj5ma41fdl9g5ldoc936n0.apps.googleusercontent.com';
var appSecret = 'M_Ci4bTixvNifnnC-PKwEa5h';
var callback = 'http://localhost:3000/auth/google/callback';

var User = require('../models/user');

module.exports = function (passport) {

    passport.serializeUser(function(user, done){
        done(null, user.google.id);
        console.log("User serialized");
    });

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, done){
            done(err, User)
            console.log("User deserialized");
        });
    });

    passport.use("google", new GoogleStrategy({
        clientID: appid,
        clientSecret: appSecret,
	    callbackURL: callback,
        profileFields: ['id', 'displayName', 'emails']
    },

    function(token, tokenSecret, profile, done){

        process.nextTick(function(){

            var email = profile.emails[0].value

            User.findOne({'email' : email}, function(err, user){

                if(user){
                    console.log("googleStrategy: local user found - merging data");

                    user.google.accessToken = token;
                    user.google.refreshToken = tokenSecret;
                    user.google.id = profile.id;
                    user.google.profile = profile;

                    console.log("accesstoken", token)

                    user.save(function(err, user){
                        if(err){
                            return done(err,false);
                        }
                        return done(null,user);
                    });

                } else {
                    console.log("googleStrategy: unknown user - create new user");

                    var user = new User();
                    user.email = email;
                    user.password = "";
                    user.google.accessToken = token;
                    user.google.refreshToken = "";
                    user.google.id = profile.id;
                    user.google.profile = profile;

                    user.save(function(err, user){
                        if(err){
                            return done(err,false);
                        }

                        return done(null,user);
                    });
                }

                // Fetch latest 10 emails and show the snippet

                var Gmail = require('node-gmail-api');
                var gmail = new Gmail(token);
                var s = gmail.messages('label:inbox', {max: 10})

                s.on('data', function (d) {
                    console.log(d.snippet)
                });
            });
        });
    }));
}
