import { useState, useEffect } from "react";
import axios from "axios";
import "./output.css";
import "./input.css";

import AddCity from "./components/AddCity.js";

function App() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

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
    setCities(data.cities.map((city) => city.name));
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <div className="container text-center mx-auto my-20 max-w-md">
      <h1 className="my-6 text-3xl font-bold text-slate-800">
        Awesome Weather Dashboard
      </h1>
      <p className="text-lg text-slate-600 mb-6">
        Enter a city to get current weather information
      </p>

      <AddCity
        handleSubmit={handleSubmit}
        handleInputChange={(e) => setCity(e.target.value)}
        newCity={city}
      />
    </div>
  );
}

export default App;
