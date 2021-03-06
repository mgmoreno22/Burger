var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i=0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

var orm = {
    all: function(table, cb) {
        var query = "SELECT * FROM " + table + ";";
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var query = "INSERT INTO " + table;
        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(vals.length);
        query += ") ";

        console.log(query);

        connection.query(query, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    update: function(table, objColVals, condition, cb) {
        var query = "UPDATE " + table;
        query += " SET ";
        query += objToSql(objColVals);
        query += " WHERE ";
        query += " devoured=true;";

        console.log(query);
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;