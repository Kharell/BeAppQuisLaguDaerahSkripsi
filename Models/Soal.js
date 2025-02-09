const mongoose = require("mongoose");

const SoalSchema = new mongoose.Schema({
  no: { type: Number, required: true },
  soal: { type: String, required: true },
  pilihanganda: { type: [String], required: true },
  kunciJawaban: { type: String, required: true },
});

module.exports = mongoose.model("Soal", SoalSchema);
