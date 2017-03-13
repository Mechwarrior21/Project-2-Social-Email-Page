var facebookStrategy = require('passport-facebook').Strategy;

var appid = '';
var appSecret = '';
var callback = "http://localhost:3000/auth/facebook/callback"

//var User = require('../models/user')

/*module.exports = function (passport) {

    passport.use("facebook", new facebookStrategy({
        clientID: appid,
        clientSecret: appSecret,
        callbackURL: callback,
        profileFields: ['id', 'emails', 'name', 'photos', 'link', 'gender']
	},

	function(accessToken, refreshToken, profile, cb) {
        
        console.log('accessToken', accessToken);		
		console.log('refreshToken', refreshToken);
		console.log('Facebook profile check user', profile); //obtaining the profile object from FB
	    
        User.findOne({email: profile.emails[0].value}, function(err, user){
            if(err){
                console.log(err);
                return done(err);
            }
            else if (user) {
                console.log('user found!!!!', user);
                return done(null, user);
            } else {
                console.log('did we find email in db and match it!!!!!!!!!!!!?');
            }
        });
    });
)};

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));*/