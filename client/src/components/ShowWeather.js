import React from "react";

const showWeather = ({ data }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          className="w-24 h-24"
        />
      </div>
      <div className="flex items-center text-lg font-medium text-gray-600 space-x-2">
        <span>{data.weather[0].main}</span>
        <span>|</span>
        <span>{Math.floor(data.main.temp - 273.15)}&deg;C</span>
      </div>
    </div>
  );
};

export default showWeather;
