// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URL) {
      console.error("Error: MONGO_URL tidak ditemukan di .env");
      process.exit(1);
    }

    console.log("Menghubungkan ke MongoDB...");

    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB berhasil terhubung!");

    // Event listener untuk menangani error runtime
    mongoose.connection.on("error", (err) => {
      console.error("❌ Kesalahan koneksi MongoDB:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ Koneksi ke MongoDB terputus!");
    });
  } catch (error) {
    console.error("❌ Gagal menghubungkan ke MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
