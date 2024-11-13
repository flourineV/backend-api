require('dotenv').config();
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // nếu ko làm => 3306
    user: process.env.DB_USER, // nếu ko dùng user/password => empty
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = connection;