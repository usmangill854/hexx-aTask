const mongoose = require("mongoose");

const carModelSchema = new mongoose.Schema({
  carModel: {
    type: String,
    required: true,
  },
});
const CarModel = mongoose.model("CarModel", carModelSchema);
module.exports = CarModel;
