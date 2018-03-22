module.exports = function(app){
    var mongoose = require('mongoose');
    var pfModel = mongoose.model('pfModel');
    var pjModel = mongoose.model('pjModel');
    
    app.post('/salvapf', function(req, res){
        var pfSave = new pfModel(req.body);
        pfSave.save(function(err, response){
            if(err) res.status(400).send(response);
            res.status(200).send(response);
        });
    });
    app.post('/salvapj', function(req, res){
        var pjSave = new pjModel(req.body);
        pjSave.save(function(err, response){
            if(err) res.send(response);
            res.send(response);
        });
    });
};

    

