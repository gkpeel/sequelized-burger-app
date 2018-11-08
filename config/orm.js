var connection = require('./connection.js');

function objectToSql(object) {
    var arr = [];
    for (var key in object) {
      var value = object[key];
      if (Object.hasOwnProperty.call(object, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + " = " + value);
      }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableName], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableName, colName, colValue, cb) {
        var queryString = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(queryString, [tableName, colName, colValue], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableName, colValsObj, id, cb) {
        var queryString = 'UPDATE ' + tableName;
        queryString += ' SET ' + objectToSql(colValsObj);
        queryString += ' WHERE id = ' + id;
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;