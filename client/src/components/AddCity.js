import React from "react";

const AddCity = ({ handleSubmit, handleInputChange, newCity }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-6 w-full max-w-lg mx-auto border border-gray-200"
    >
      <div className="mb-4">
        <input
          placeholder="Type your favorite city"
          type="text"
          onChange={handleInputChange}
          value={newCity}
          className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 transition duration-200"
        >
          Add City
        </button>
      </div>
    </form>
  );
};

export default AddCity;
