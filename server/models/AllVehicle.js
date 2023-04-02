const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AllVehicleSchema = new Schema({
    title : String,
    desc : String,
    img_link : String,
    brand : String,  
    model: String,
    variant: String
});

const AllVehicle = mongoose.model("vehicle-full-details", AllVehicleSchema);

module.exports =AllVehicle;
