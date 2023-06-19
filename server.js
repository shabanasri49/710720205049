const express = require('express');
const router = express.Router();
const app = express();//it will create the express server
const connectDB = require("./config/db.config");
connectDB();
//define routes
app.use(express.json());
app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/user"));
app.get("/", (req, res) => { res.status(200).json({ msg: "Train ticket" }) });

app.listen(9000, () => {
    console.log("server started");
});


