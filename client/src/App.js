import { useState, useEffect } from "react";
import axios from "axios";
import "./output.css";
import "./input.css";

import AddCity from "./components/AddCity.js";
import Weather from "./components/Weather.js";
import ShowWeather from "./components/ShowWeather";

function App() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity(city);
  };

  const addCity = async (city) => {
    await axios.post(`/api/cities`, { city_name: city });
    getCities();
    setCity("");
  };

  const getCities = async () => {
    const { data } = await axios.get("/api/cities");
    setCities(data.cities.map((city) => city.city_name));
  };

  const getWeather = async (city) => {
    const { data } = await axios(`/api/weather/${city}`);
    console.log(data);
    setWeather(data);
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <div className="container mx-auto my-20 max-w-2xl text-center">
      <h1 className="my-6 text-4xl font-bold text-gray-800">
        Awesome Weather Dashboard
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Enter a city to get current weather information
      </p>

      <AddCity
        handleSubmit={handleSubmit}
        handleInputChange={(e) => setCity(e.target.value)}
        newCity={city}
      />

      <Weather
        cities={cities}
        handleSelectCity={(e) => getWeather(e.target.value)}
      />

      {weather && <ShowWeather data={weather} />}
    </div>
  );
}

export default App;
