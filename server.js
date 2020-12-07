const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

// Mounting Router
const transactions = require("./routes/transactions");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//app.use() to specify middleware as the callback function
app.use("/api/v1/transactions", transactions);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// Route, Handling get request to '/' and callback takes in req, res.
// app.get("/", (req, res) => res.send("Hello"));

const PORT = process.env.PORT || 5000;

// Run server
app.listen(
  PORT,
  console.log(
    `> Server running on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
      .yellow
  )
);
