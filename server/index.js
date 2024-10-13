const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use("/api/cities", require("../api/cities.js"));
app.use("/api/weather/", require("../api/weathers.js"));

app.use("/api/cities", require("../api/cities.js"));
app.use("/api/weathers/", require("../api/weathers.js"));

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}/api/cities`);
});

module.exports = app;
