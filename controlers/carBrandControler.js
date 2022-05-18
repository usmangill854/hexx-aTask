const CarBrand = require("../model/carBrand");

exports.getAll = async (req, res) => {
  try {
    const carBrand = await CarBrand.find();
    res.status(200).json({
      data: carBrand,
      count: carBrand.length,
    });
  } catch (error) {
    res.send(error.message);
  }
};
exports.addCarBrand = async (req, res) => {
  try {
    const addCarModel = await CarBrand.create(req.body);
    res.status(200).json({
      success: true,
      machanic: addCarModel,
    });
  } catch (error) {
    res.send(error.message);
  }
};
