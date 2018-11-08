var orm = require('../config/orm.js');

burgers = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(result);
        });
    },
    insertOne: function(colName, colValue, cb) {
        orm.insertOne("burgers", colName, colValue, function(result){
            cb(result);
        });  
    },
    updateOne: function(colValsObj, id, cb) {
        orm.updateOne("burgers", colValsObj, id, function(res){
            cb(res);
        })
    }
}

module.exports = burgers;   