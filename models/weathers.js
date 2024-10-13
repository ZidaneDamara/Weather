const axios = require("axios");

const { WEATHER_API } = process.env;

const getWeatherByCity = async (city) => {
  try {
    console.log(`Weather API Key: ${WEATHER_API}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${WEATHER_API}`;
    const response = await axios.get(url);
    return response; 
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    return null; 
  }
};

module.exports = getWeatherByCity;
