const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    email: String,
    name: String,
    img: {
        data: Buffer,
        contentType: String
    }
})

const ImageModal = mongoose.model('image', ImageSchema);
module.exports = ImageModal;
