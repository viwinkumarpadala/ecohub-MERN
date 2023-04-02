const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name: String,
	a_price: String,
	d_price: String,
});

const Product = mongoose.model("product-details", ProductSchema);

module.exports = Product;
