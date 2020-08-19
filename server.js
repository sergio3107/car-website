const express = require("express");
const connectDB = require("./config/db");
const jwt = require("jsonwebtoken");
const app = express();

connectDB();

app.get("/", (req, res) => res.json({ msg: "Welcome to Octane-Car-Parts" }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
