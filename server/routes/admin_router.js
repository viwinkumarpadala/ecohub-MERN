const express = require("express");
const Admin = require("../models/Admin");
const User = require("../models/User");
const admin_router = express.Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

admin_router.get("/", async (req, res) => {
	// console.log("in req")
	const users = await Admin.find();
	res.json(users);
});

admin_router.post("/announce", async (req, res) => {
	const users = await User.find();

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

	const sendEmail = async (email) => {
		let info = await transporter.sendMail({
			from: '"ECOHUB Mail Service" <ecohub.mern@gmail.com>', // sender address
			to: email, // list of receivers
			subject: "Important Announcement", // Subject line
			html: `<h1>Hi There! We are back with an announcement!</h1>
		<h2>
		We are very happy to announce
		</h2>
		<p>
        <span style="color: rgb(165, 122, 13)">
            <i>
                "${req.body.announcementValue}"
            </i>
        </span>
		<br />
    	</p>
		<h4>
		Browse! Buy! Repeat! <br />
		<br /> Thank you and have a great day!
		</h4>
		<h4>Ecohub, India</h4>`,
		});

		console.log("Message sent: %s", info.messageId);
	};

	for (let user of users) {
		// console.log(user.email);
		sendEmail(user.email);
	}

	res.sendStatus(200);
});

module.exports = admin_router;
