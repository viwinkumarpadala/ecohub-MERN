const express = require("express");
const User = require("../models/User");
const user_router = express.Router();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");

function hashpassword(password) {
	const salt = bcrypt.genSaltSync();
	return bcrypt.hashSync(password, salt);
}

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

function comparepassword(raw, hash) {
	return bcrypt.compareSync(raw, hash);
}

user_router.get("/", async (req, res) => {
	// console.log("in req")
	const users = await User.find();
	res.json(users);
});

user_router.get("/:id", async (req, res) => {
	// console.log(typeof(req.params.id))
	const user = await User.findById(req.params.id);
	res.json(user);
});

user_router.post("/", async (req, res) => {
	let user = await User.find({
		email: req.body.email,
		// password: hashpassword(req.body.password),
	});
	console.log(req.body);
	console.log(user);
	if (user.length !== 0) {
		user = "Please enter a non-used email!";
	} else {
		let imgURL = null;
		if (req.body.img_url == "") {
			imgURL =
				"https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png";
		} else {
			imgURL = req.body.img_url;
		}
		user = new User({
			username: req.body.username,
			fullname: req.body.fullname,
			email: req.body.email,
			password: hashpassword(req.body.password),
			city: req.body.city,
			address: req.body.address,
			gender: req.body.gender,
			phone_number: req.body.phone_number,
			img_url: imgURL,
			cart: [],
		});
		await user.save();
		console.log("User saved!");
		const sendEmail = async () => {
			let info = await transporter.sendMail({
				from: '"ECOHUB Mail Service" <ecohub.mern@gmail.com>', // sender address
				to: req.body.email, // list of receivers
				subject: "Welcoming Email", // Subject line
				html: `<h1>Welcome to ECOHUB</h1>
			<h3>
			Welcome to ECOHUB! We are so thrilled to have you here! Here is your user ID: <i>${user._id}</i>. <br />
			You can use this ID whenever needed. <br /> 
			Browse! Buy! Repeat! <br />
			We welcome you again to ECOHUB!
			<br /> Thank you and have a great day!</h3>
			<h4>Ecohub, India</h4>`,
			});

			console.log("Message sent: %s", info.messageId);
		};

		sendEmail();
	}

	res.json(user);
});

user_router.post("/signin", async (req, res) => {
	let user = await User.find({
		email: req.body.email,
	});

	console.log(user);
	if (user.length > 0) {
		console.log(req.body);
		console.log(user);
		if (comparepassword(req.body.password, user[0].password)) {
			res.json(user);
		} else {
			res.json([]);
		}
	} else {
		res.json([]);
	}
});

user_router.put("/:id", async (req, res) => {
	const user = await User.findByIdAndUpdate(
		req.params.id,
		{
			name: req.body.name,
			email: req.body.email,
			password: hashpassword(req.body.password),
			updatedAt: Date.now(),
		},
		{ new: true }
	);
	res.json(user);
});

user_router.delete("/:id", async (req, res) => {
	await User.deleteOne({ _id: req.params.id });
	const message = "User deleted successfully";
	console.log(message);
	res.json({ message });
});

user_router.post("/update-profile", async (req, res) => {
	console.log(`req recieved`);
	console.log(req.body);

	const user = await User.findOneAndUpdate(
		{ email: req.body.email },
		{
			fullname: req.body.fullname,
			username: req.body.username,
			email: req.body.email,
			phone_number: req.body.phoneNumber,
			city: req.body.city,
			address: req.body.address,
			img_url: req.body.image_url,
			password: hashpassword(req.body.password),
			updatedAt: Date.now(),
		}
		// { new: true }
	);
	const message = "User updated successfully";
	console.log(message);
	console.log(user);
	res.json(user);
});

user_router.post("/get-cart", async (req, res) => {
	const email = req.body.email;
	const results = await User.find({ email: email }).populate("cart");
	console.log(results);
	res.json({ results });
});

user_router.post("/add-to-cart", async (req, res) => {
	console.log(req.body);
	const user = await User.find({ email: req.body.email });
	console.log(user);
	let response;
	if (user.length !== 0) {
		// then the first one in array is the user
		const cart = user[0].cart;
		if (!cart.includes(req.body.product_id)) {
			// we need to add into the array
			cart.push(req.body.product_id);
			await User.updateOne({ email: req.body.email }, { cart: cart });
			console.log("Added");
			response = "Added into the Cart";
		} else {
			console.log("Present");
			response = "Already present in the Cart";
		}
	} else {
		response = "Non-valid user";
	}
	res.send(response);
});

user_router.post("/change-to-default", async (req, res) => {
	const user = await User.find({ email: req.body.email });
	let response;
	if (user.length !== 0) {
		console.log(user[0]);
		const requiredUser = user[0];
		await User.updateOne(
			{ email: requiredUser.email },
			{
				password:
					"$2b$10$.tH.K5JrhKKFE2c/QM/LOOcFwIk.o4l3BNaTeoHHgHuMm93vYZVHK",
			}
		);
		const sendEmail = async () => {
			let info = await transporter.sendMail({
				from: `"ECOHUB Mail Service" <ecohub.mern@gmail.com>`, // sender address
				to: req.body.email, // list of receivers
				subject: "Password Reset", // Subject line
				html: `<h1>Hello User</h1>
			<h3>
			Since you have forgotten your password, Here is your one time password: "ECOHUB_Default_Password"
			<br /> Login using this password and change it as soon as possible.
			<br /> Thank you and have a great day!</h3>
			<h4>Ecohub, India</h4>`,
			});

			console.log("Message sent: %s", info.messageId);
		};

		sendEmail();

		response = "Updated";
	} else {
		response = "Non-valid user";
	}
	res.send(response);
});

user_router.post("/remove-from-cart", async (req, res) => {
	// console.log(req.body);
	const user = await User.find({ _id: req.body.user_id });
	let response;
	if (user.length !== 0) {
		// then the first one in array is the user
		let cart = user[0].cart;
		console.log(cart);
		cart = cart.filter(
			(item) => item._id.toString() !== req.body.product_id
		);
		console.log(cart);
		await User.updateOne({ _id: req.body.user_id }, { cart: cart });
		console.log("Removed from cart");
		response = "Removed from Cart";
	} else {
		response = "Non-valid user";
	}
	res.send(response);
});

user_router.post("/empty-cart", async (req, res) => {
	console.log(req.body);
	const user = await User.find({ _id: req.body.user_id });
	let response;
	if (user.length !== 0) {
		// then the first one in array is the user
		await User.updateOne({ _id: req.body.user_id }, { cart: [] });
		console.log("Emptied Cart");
		response = "Emptied Cart";
	} else {
		response = "Non-valid user";
	}
	res.send(response);
});

module.exports = user_router;
