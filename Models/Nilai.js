const mongoose = require("mongoose");

const NilaiSchema = new mongoose.Schema({
  namaSiswa: { type: String, required: true },
  nilai: { type: Number, required: true },
});

module.exports = mongoose.model("Nilai", NilaiSchema);
