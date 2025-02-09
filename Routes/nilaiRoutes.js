// Routes/nilaiRoutes.js
const express = require("express");
const {
  createNilai,
  getAllNilai,
  getNilaiByNama,
} = require("../Controllers/nilaiController");
const router = express.Router();

// Tambah nilai (POST request untuk menambahkan nilai baru)
router.post("/", createNilai);

// Ambil semua nilai (GET request untuk mengambil semua data nilai)
router.get("/", getAllNilai);

// Ambil nilai berdasarkan nama siswa (GET request dengan parameter dinamis 'namaSiswa')
router.get("/:namaSiswa", getNilaiByNama);

module.exports = router;
