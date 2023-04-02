const express = require("express");
const app = express();
const totp = require("totp-generator");
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");

const auth = {
	auth: {
		api_key: "cef7a9a66a4c0f147db2df9edb2cc5f7-30344472-0e4d2777",
		domain: "sandbox4b30c1e271dd4abeb71188792e232645.mailgun.org",
	},
};

const PORT = 3005;

app.listen(PORT);

app.use(express.json());

app.post("/", (req, res) => {
	console.log("request recieved");
});

let verifytoken = "";

app.post("/getotp", (req, res) => {
	const token = totp("JBSWY3DPEHPK3PXP", {
		algorithm: "SHA-512",
		digits: 6,
		period: 10,
	});
	console.log(token);
	verifytoken = token;

	console.log(req.body.email);

	const nodemailerMailgun = nodemailer.createTransport(mg(auth));

	nodemailerMailgun.sendMail(
		{
			from: "ecohub.mern@gmail.com",
			to: req.body.email, // An array if you have multiple recipients.
			subject: "Hey you, awesome!",
			//You can use "html:" to send HTML email content. It's magic!
			html: `<h1>Hello User</h1>
        <h3>
        Hello User, Here is your OTP: ${token}, Please enter the otp before it expires in next 3 minutes
        <br /> Thank you and have a great day!</h3>
        <h4>Ecohub, India</h4>`,
		},
		(err, info) => {
			if (err) {
				console.log(`Error: ${err}`);
			} else {
				console.log(`Response: ${info}`);
			}
		}
	);

	res.send("otp sent");
});

app.post("/verifyotp", (req, res) => {
	if (
		req.body.enteredotp == verifytoken &&
		req.body.enteredemail == verifyemail
	) {
		res.send(`successfully verified user`);
	} else if (
		req.body.enteredotp == verifytoken &&
		req.body.enteredemail != verifyemail
	) {
		res.send("enter your otp using correct email!!");
	} else {
		res.send("enter correct otp!!");
	}
});

console.log(verifytoken);
