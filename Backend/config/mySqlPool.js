// const { createPool } = require("mysql2/promise");
// const { credentials } = require("./mySql");

// // eslint-disable-next-line new-cap
// const pool = new createPool(credentials);
// const query = async (text, params) => {
//   try {
//     const connection = await pool.getConnection();
//     const [rows] = await connection.execute(text, params);
//     connection.release();
//     return { success: true, rows };
//   } catch (error) {
//     return { success: false, error: error.message };
//   }
// };

// module.exports = { query };
