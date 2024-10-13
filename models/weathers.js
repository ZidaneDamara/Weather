const axios = require("axios");

const { WEATHER_API } = process.env;
const getWeatherByCity = async (city) => {
  console.log(`Weather API Key: ${WEATHER_API}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${WEATHER_API}`;
  return axios.get(url);
};

module.exports = getWeatherByCity;
