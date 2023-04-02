const express = require("express");
const ElectricVehicle = require("../models/ElectricVehicleSmall");
const vehicle_router = express.Router();

vehicle_router.get("/", async (req, res) => {
	// console.log("in req")
	const vehicles = await ElectricVehicle.find();
	res.json(vehicles);
});

module.exports = vehicle_router;
