const express = require("express");
const allVehicle = require("../models/AllVehicle");
const allvehicle_router = express.Router();

allvehicle_router.get("/", async (req, res) => {
	// console.log("in req")
	const allvehicles = await allVehicle.find();
	res.json(allvehicles);
});

module.exports = allvehicle_router;
