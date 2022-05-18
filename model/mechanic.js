const mongoose = require("mongoose");

const mechanicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  carModel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CarModel",
  },carBrand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CarBrand",
  }
});
const Machanic = mongoose.model("Mechanic", mechanicSchema);
module.exports = Machanic;
