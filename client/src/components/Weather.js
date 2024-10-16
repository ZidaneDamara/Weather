import React from "react";

const Weather = ({ cities, handleSelectCity }) => {
  return (
    <div className="w-full max-w-lg mx-auto flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-blue-300 p-8 rounded-lg shadow-xl">
      <h2 className="mb-4 text-center text-white text-3xl font-bold tracking-wide">
        Current Weather
      </h2>
      <select
        onChange={handleSelectCity}
        className="block w-full bg-white border border-green-400 text-gray-700 py-3 px-4 pr-8 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition ease-in-out duration-200"
      >
        {cities.length > 0 &&
          cities.map((city) => <option key={city}>{city}</option>)}
      </select>

    </div>
  );
};

export default Weather;
