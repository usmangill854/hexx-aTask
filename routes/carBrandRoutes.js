const express = require("express");
const router = express.Router();
const carBrand = require("../controlers/carBrandControler");

router.route("/").get(carBrand.getAll).post(carBrand.addCarBrand);

module.exports = router;
