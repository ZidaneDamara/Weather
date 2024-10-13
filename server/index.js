const express = require("express");
const massive = require("massive");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/api/cities", require("../api/cities.js"));
app.use("/api/weather", require("../api/weathers.js"));

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}/api/cities`);
});

module.exports = app;
