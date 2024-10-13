const router = require("express").Router();
const { getAll, insert } = require("../models/cities.js");

router.get("/", async (req, res) => {
  try {
    const cities = await getAll();
    res.json({ cities });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { city_name } = req.body;
    const result = await insert(city_name);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
