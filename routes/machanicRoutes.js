const express = require("express");
const router = express.Router();
const {
  getAll,
  addMachanic,
  machanicDetail,
} = require("../controlers/machanicControler");

router.route("/").get(getAll).post(addMachanic);
router.route("/machanicdetail").get(machanicDetail);
module.exports = router;
