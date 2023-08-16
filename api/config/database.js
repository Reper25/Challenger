const {createPool} = require('mysql');
require('dotenv').config();

const pool = createPool ({
        host: process.env.DB_host,
        user: process.env.DB_user,
        password: process.env.DB_pass,
        port: process.env.DB_port,
    connectionLimits:10
});
module.exports = pool ;