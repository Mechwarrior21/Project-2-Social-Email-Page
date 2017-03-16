var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	displayName	: {type: String},
	email 		: {type: String, unique: true, required: true},
	password 	: {type: String},

	twitter: {
		token: String,
		tokenSecret: String,
		id: String,
		profile: mongoose.Schema.Types.Mixed
	},
    
    google: {
		token: String,
		tokenSecret: String,
		id: String,
		profile: mongoose.Schema.Types.Mixed
    },
		
},{
	timestamps: true
});

var User = mongoose.model('User', userSchema);

module.exports = User;