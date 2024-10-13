const router = require("express").Router();
const getWeatherByCity = require("../models/weathers.js");

router.get("/:city", async (req, res) => {
  const { city } = req.params;
  try {
    const weather = await getWeatherByCity(city);

    if (!weather) {
      return res.status(500).json({ error: "Unable to fetch weather data" });
    }

    res.json(weather.data);
  } catch (error) {
    console.error("Error in weather route:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
