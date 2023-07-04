 import app from "./app.js";

const port = process.env.PORT || 5000;

// import { sequelize } from "./database/database.js";

async function main() {
  app.listen(port, () => {
    console.log(`Server on port ${port}`);
  });
}

main();