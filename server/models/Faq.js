const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const faq = new Schema({
	title: String,
	description: String,
	asked_by: Number,
});

const Faq = mongoose.model("faq", FaqSchema);

module.exports = Faq;