const express = require("express");
const { createSoal, getAllSoal } = require("../Controllers/soalController");
const router = express.Router();

router.get("/", getAllSoal);
router.post("/", createSoal);

module.exports = router;
