const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "12345678",
    host: "database-1.cafitu8cnhu0.us-west-2.rds.amazonaws.com",
    port: 5432, 
    database: "expenditure"
});

module.exports = pool; 