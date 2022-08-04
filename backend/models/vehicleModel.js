const mongoose = require("mongoose");

const vehicle = new mongoose.Schema({
    nicNo: { type: String, required: true },
    mobileNo: { type: String, required: true },
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    vehicleNumber: { type: String, required: true },
    vehicleType: { type: String, required: true }
});

module.exports = mongoose.model("Vehicle", vehicle);