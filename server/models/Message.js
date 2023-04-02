const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	email: String,
	type: String,
	message: String,
});

const Message = mongoose.model("message", MessageSchema);

module.exports = Message;
