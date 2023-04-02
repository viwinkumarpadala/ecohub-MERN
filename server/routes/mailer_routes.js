const express = require("express");
const mailer_router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const totp = require("totp-generator");
const nodemailer = require("nodemailer");
const OTP = require("../models/OTP");

// console.log(process.env.GMAIL_PASS);

let transporter = nodemailer.createTransport({
	host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
	port: 465, // Port for SMTP (usually 465)
	secure: true, // Usually true if connecting to port 465
	auth: {
		user: process.env.GMAIL, // Your email address
		pass: process.env.GMAIL_PASS, // Password (for gmail, your app password)
		// ⚠️ For better security, use environment variables set on the server for these values when deploying
	},
});

mailer_router.post("/getotp", async (req, res) => {
	const token = totp("JBSWY3DPEHPK3PXP", {
		algorithm: "SHA-512",
		digits: 6,
		period: 180,
	});
	console.log(token);
	const newOTP = new OTP({
		email: req.body.email,
		otp: token,
	});
	await newOTP.save();

	const sendEmail = async () => {
		let info = await transporter.sendMail({
			from: '"ECOHUB Mail Service" <ecohub.mern@gmail.com>', // sender address
			to: req.body.email, // list of receivers
			subject: "OTP", // Subject line
			html: `<h1>Hello User</h1>
	    <h3>
	    Hello User, Here is your OTP: ${token}, Please Enter the OTP before it expires in next 3 minutes
	    <br /> Thank you and have a great day!</h3>
	    <h4>Ecohub, India</h4>`,
		});

		console.log("Message sent: %s", info.messageId);
	};

	sendEmail();

	res.sendStatus(200);
});

mailer_router.post("/verifyotp", async (req, res) => {
	let emailOTP = await OTP.find({ email: req.body.email });
	console.log(emailOTP);
	let response;
	if (emailOTP.length !== 0) {
		const email = emailOTP[0].email;
		const otp = emailOTP[0].otp;

		if (email === req.body.email && otp === req.body.otp) {
			response = {
				status: true,
				message: "OTP verified",
			};
			await OTP.deleteMany({ email: email });
		} else if (email === req.body.email && otp !== req.body.otp) {
			response = {
				status: false,
				message: "Please enter a valid OTP",
			};
		} else {
			response = {
				status: false,
				message: "Please enter a valid email",
			};
		}
	} else {
		response = {
			status: false,
			message: "Invalid",
		};
	}
	res.send(response);
});

// console.log(verifytoken);

module.exports = mailer_router;
