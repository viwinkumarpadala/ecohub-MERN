const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
	title: String,
	description: String,
	source: String,
});

const Articles = mongoose.model("article", ArticleSchema);

module.exports = Articles;