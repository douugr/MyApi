module.exports = function(app){
    var mongoose = require('mongoose');
    var pfModel = mongoose.model('pfModel');
    var pjModel = mongoose.model('pjModel');

    app.delete('/deletepf/:id', function(req,res){
        pfModel.find({_id: req.params.id}).remove().exec(function(err, response){
            if(err) res.send(err);
            res.send(response);
        });
    });
    app.delete('/deletepj/:id', function(req,res){
        pjModel.find({_id: req.params.id}).remove().exec(function(err, response){
            if(err) res.send(err);
            res.send(response);
        });

    });
}