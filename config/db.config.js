const mongoose = require("mongoose");
const dbURI = "mongodb://127.0.0.1:27017/devconnector49";
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log("connected to database...");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
module.exports = connectDB;
