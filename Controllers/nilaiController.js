const Nilai = require("../Models/Nilai");

// Tambah nilai
exports.createNilai = async (req, res) => {
  try {
    const nilai = new Nilai(req.body);
    await nilai.save();
    res.status(201).json(nilai);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Ambil semua nilai
exports.getAllNilai = async (req, res) => {
  try {
    const nilai = await Nilai.find();
    res.json(nilai);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controllers/nilaiController.js
exports.getNilaiByNama = async (req, res) => {
  const { namaSiswa } = req.params; // Mengambil parameter namaSiswa dari URL
  try {
    const nilai = await Nilai.findOne({ namaSiswa });
    if (!nilai) {
      return res.status(404).json({ message: "Data nilai tidak ditemukan" });
    }
    res.json(nilai);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
