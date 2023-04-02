const express = require("express");
const Product = require("../models/Product");
const product_router = express.Router();

product_router.get("/", async (req, res) => {
	// console.log("in req")
	const products = await Product.find();
	res.json(products);
});

module.exports = product_router;
