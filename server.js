require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoutes");
const soalRoutes = require("./Routes/soalRoutes");
const nilaiRoutes = require("./Routes/nilaiRoutes");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Koneksi ke database
connectDB();

// Rute API
app.use("/api/users", userRoutes);
app.use("/api/soal", soalRoutes);
app.use("/api/nilai", nilaiRoutes);

// Menjalankan server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);

// Kode Di bagiian Controller
// nilai, soal dan user
// method yang baru di buat untuk testing api nya adalah
// GET, POST,
// yang lainnya akan menyusul sesuai kebutuhan aplikasi wkwkwkw
// semangat Karel Ganteng ahaha Bampuki e 😁✌️
