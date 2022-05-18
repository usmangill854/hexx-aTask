const mongoose = require("mongoose");

const carBrandSchema = new mongoose.Schema({
  carBrand: {
    type: String,
    required: true,
  },
});
const CarBrand = mongoose.model("CarBrand", carBrandSchema);
module.exports = CarBrand;
