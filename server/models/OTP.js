const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OTPSchema = new Schema({
	email: {
		type: String,
	},
	otp: String,
});

const OTP = mongoose.model("otp", OTPSchema);

module.exports = OTP;
