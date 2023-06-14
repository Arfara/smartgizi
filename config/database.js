import { Sequelize } from "sequelize";

const db = new Sequelize('smartgizi-user-db','root',{
    host:'34.101.41.22',
    dialect:'mysql'
});

export default db;


// const mysql = require('mysql2');
// require('dotenv').config();

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// });

// module.exports = connection;
