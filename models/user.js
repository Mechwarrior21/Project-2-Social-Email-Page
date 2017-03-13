var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name		: {type: String},
	email 		: {type: String, unique: true, required: true},
	password 	: {type: String},

	facebook: {
		accessToken: String,
		refreshToken: String,
		id: String,
        profileUrl: String,
		profile: mongoose.Schema.Types.Mixed
	},

/*	twitter: {
		token: String,
		tokenSecret: String,
		id: String,
		profile: mongoose.Schema.Types.Mixed
	},*/
		
},{
	timestamps: true
});

var User = mongoose.model('User', userSchema);

module.exports = User;