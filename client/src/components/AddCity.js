import React from "react";

const AddCity = ({ handleSubmit, handleInputChange, newCity }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto"
    >
      <div className="mb-4">
        <input
          placeholder="Type your favorite city"
          type="text"
          onChange={handleInputChange}
          value={newCity}
          className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Add City
        </button>
      </div>
    </form>
  );
};

export default AddCity;
