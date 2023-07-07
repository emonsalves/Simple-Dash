import app from "./app.js";
import './models/Proyect.js'

const port = process.env.PORT || 5000;

import { sequelize } from "./database/database.js";
import { jsonResponse } from "./lib/jsonResponse.js";

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database was successful");
    app.listen(port);
    console.log(`Server on port ${port}`);
  } catch (error) {
    jsonResponse(500, { error: error.message });
  }
}

main();
