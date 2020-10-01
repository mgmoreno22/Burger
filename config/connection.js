var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3030,
    user: "root",
    password: "",
    database: "cat_db"
})

connection.connect(err => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})

module.exports = connection;