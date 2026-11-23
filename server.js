const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

// Test route
app.get("/", (req, res) => {
    res.send("Nickname Tracker Backend Running");
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
