import app from "./app.js";
import "./models/index.js";
import { createRoles } from "./models/RoleGenerator.js";

const port = process.env.PORT || 5000;

import { jsonResponse } from "./lib/jsonResponse.js";
import { sequelize } from "./database/ProyectZero.js";

async function force() {
  try {
    const test = false;
    if (test) {
      sequelize.sync({ force: true });
      console.log("Tables created successfully");
      createRoles();
      console.log("Default roles generated successfully");
    }
  } catch (error) {
    jsonResponse(500, { error: error.message });
  }

  try {
    app.listen(port);
    console.log(`Server on port ${port}`);
  } catch (error) {
    jsonResponse(500, { error: error.message });
  }
}

force();
