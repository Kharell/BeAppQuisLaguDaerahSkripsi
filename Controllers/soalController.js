const Soal = require("../Models/Soal");

// Fungsi untuk mendapatkan semua soal
const getAllSoal = async (req, res) => {
  try {
    const soal = await Soal.find();
    const jumlahSoal = soal.length; // Menghitung jumlah soal
    res.status(200).json({
      success: true,
      message: "Soal retrieved successfully",
      jumlahSoal: jumlahSoal, // Menambahkan jumlah data ke dalam respons
      data: soal,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching soal data",
      error: err.message,
    });
  }
};

// Fungsi untuk menambah banyak soal sekaligus
const createSoal = async (req, res) => {
  const soalArray = req.body; // Expecting an array of soal objects

  // Validasi bahwa body adalah array
  if (!Array.isArray(soalArray)) {
    return res.status(400).json({
      success: false,
      message: "Input should be an array of soal",
    });
  }

  // Validasi setiap soal dalam array
  for (let soal of soalArray) {
    const { no, soal: soalText, pilihanganda, kunciJawaban } = soal;

    if (!no || !soalText || !pilihanganda || !kunciJawaban) {
      return res.status(400).json({
        success: false,
        message:
          "Each soal must have 'no', 'soal', 'pilihanganda', and 'kunciJawaban'",
      });
    }

    // Pastikan 'pilihanganda' adalah array
    if (!Array.isArray(pilihanganda)) {
      return res.status(400).json({
        success: false,
        message: "'pilihanganda' must be an array of options",
      });
    }
  }

  try {
    // Menyimpan seluruh soal sekaligus menggunakan insertMany
    const soal = await Soal.insertMany(soalArray);
    const jumlahSoalBaru = soal.length; // Menghitung jumlah soal baru yang ditambahkan
    res.status(201).json({
      success: true,
      message: "Soal created successfully",
      jumlahDataBaru: jumlahSoalBaru, // Menambahkan jumlah data baru ke dalam respons
      data: soal,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error creating soal",
      error: err.message,
    });
  }
};

module.exports = { getAllSoal, createSoal };
