const getDB = require("./database.js");

const getAll = async () => {
  try {
    const db = await getDB(process.env);
    return await db.cities.find({});
  } catch (error) {
    console.log("Error retrieving cities:", error.message);
    return [];
  }
};

const insert = async (city_name) => {
  try {
    const db = await getDB(process.env);
    return await db.cities.insert({ city_name });
  } catch (error) {
    console.log("Error inserting city:", error.message);
    return null;
  }
};

module.exports = { getAll, insert };
