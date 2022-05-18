const CarModel = require("../model/carModel");

exports.getAll = async (req, res) => {
  try {
    const carModel = await CarModel.find();
    res.status(200).json({
      data: carModel,
      count: carModel.length,
    });
  } catch (error) {
    res.send(error.message);
  }
};
exports.addCarModel = async (req, res) => {
  try {
    const addCarModel = await CarModel.create(req.body);
    res.status(200).json({
      success: true,
      machanic: addCarModel,
    });
  } catch (error) {
    res.send(error.message);
  }
};
