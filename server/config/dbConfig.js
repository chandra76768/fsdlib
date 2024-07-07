const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://chandrareddycheruku76768:<password>@cluster0.ap6xzui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/fit_Pak");

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
