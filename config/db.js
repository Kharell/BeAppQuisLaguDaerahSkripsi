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

require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URL) {
      console.error("❌ Error: MONGO_URL tidak ditemukan di .env");
      process.exit(1);
    }

    console.log("🔄 Menghubungkan ke MongoDB...");

    mongoose.set("strictQuery", false); // Mencegah peringatan deprecation

    await mongoose.connect(process.env.MONGO_URL);

    console.log(
      `✅ MongoDB berhasil terhubung ke host: ${mongoose.connection.host}`
    );

    // Event listener untuk menangani error runtime
    mongoose.connection.on("error", (err) => {
      console.error("❌ Kesalahan koneksi MongoDB:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ Koneksi ke MongoDB terputus!");
    });

    // Menangani shutdown aplikasi dengan baik
    process.on("SIGINT", async () => {
      console.log("🔴 Menutup koneksi MongoDB...");
      await mongoose.connection.close();
      console.log("✅ Koneksi MongoDB ditutup dengan aman.");
      process.exit(0);
    });
  } catch (error) {
    console.error("❌ Gagal menghubungkan ke MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
