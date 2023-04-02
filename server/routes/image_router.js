const multer = require("multer");
const express = require("express");
const image_router = express.Router();
const fs = require("fs");

const ImageModal = require("../models/ImageModal");

const storage = multer.diskStorage({
	destination: "uploads",
	filename: (req, file, callback) => {
		callback(null, file.originalname);
	},
});

const upload = multer({ storage: storage });

image_router.post("/sendImage", async (req, res) => {
	const allImages = await ImageModal.find({ email: req.body.email });
	res.json({ allImages });
});

image_router.post("/", upload.single("testImage"), async (req, res) => {
	console.log(req.file);
	const user = await ImageModal.find({ email: req.body.email });

	let response;
	if (user.length !== 0) {
		response = "Already exists";
	} else {
		const img = new ImageModal({
			email: req.body.email,
			name: req.body.name,
			img: {
				data: fs.readFileSync("uploads/" + req.file.filename),
				contentType: "image/png",
			},
		});
		await img
			.save()
			.then(() => {
				console.log("Image saved in MongoDB");
			})
			.catch((err) => {
				console.log(err, "Error has occured");
			});
		response = "Sent";
	}

	res.send(response);
});

module.exports = image_router;
