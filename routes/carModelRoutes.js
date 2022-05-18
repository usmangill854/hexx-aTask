const express = require("express");
const router = express.Router();
const carModel = require("../controlers/carModelControler");

router.route("/").get(carModel.getAll).post(carModel.addCarModel);

module.exports = router;
