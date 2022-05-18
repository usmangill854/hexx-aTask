const Machanic = require("../model/mechanic");

exports.machanicDetail = async (req, res) => {
  try {
    const machanic = await Machanic.find({}).populate("carModel carBrand");
    res.status(200).json({
      success: true,
      detail: machanic,
    });
  } catch (error) {}
};
exports.getAll = async (req, res) => {
  try {
    const machanic = await Machanic.find();
    res.status(200).json({
      data: machanic,
      count: machanic.length,
    });
  } catch (error) {
    res.send(error.message);
  }
};
exports.addMachanic = async (req, res) => {
  try {
    const machanic = await Machanic.create(req.body);
    res.status(200).json({
      success: true,
      machanic: machanic,
    });
  } catch (error) {
    res.send(error.message);
  }
};
