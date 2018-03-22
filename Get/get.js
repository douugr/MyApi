module.exports = function(app){

var mongoose = require('mongoose');
var pdModel = mongoose.model('pfModel');
var pjModel = mongoose.model('pjModel');

app.get('/pf/:id', function(req, res){
    pfModel.find({_id: req.params.id}).exec(function(err, response){
        if(err) res.send(err);
        res.send(response);
    });
});
app.get('/pj/:id', function(req, res){
    pjModel.find({_id: req.params.id}).exec(function(err, response){
        if(err) res.send(err);
        res.send(response);
    });
});

}
