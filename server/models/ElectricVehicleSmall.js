const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ElectricVehicleSchema = new Schema({
    title : String,
    range : String,
    speed : String,
    max_speed : String,  
    p_power: String,
    img_link: String,
    expand_link : String
});

const ElectricVehicle = mongoose.model("vehicle-small-details", ElectricVehicleSchema);

module.exports = ElectricVehicle;
