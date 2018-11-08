var express = require('express');
var router = express.Router();

var burgers = require('../models/burger.js');

router.get('/', function(req,res){
    burgers.selectAll(function(result){
        var handlebarObjs = {
            burgers: result
        }
        res.render('index', handlebarObjs);
    })
});

router.post('/api/burgers', function(req, res){
    burgers.insertOne("burger_name", req.body.burger_name, function(result) {
        res.json({ id: result.id });
    });
});

router.put('/api/burgers/:id', function(req, res){
    burgers.updateOne(req.body, req.params.id, function(result){
        res.json({ id: result.id });
    })
});

module.exports = router;