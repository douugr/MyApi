module.exports = function(app){
    var mongoose = require('mongoose');
    var pfModel = mongoose.model('pfModel');
    var pjModel = mongoose.model('pjModel');
    
    app.put('/updatepf/:id', function(req, res){
        var pfModel = new pfModel({
            _id: req.params.id,
            cpf: req.body.cpf,
            nome: req.body.nome,
            dtNasc: req.body.dtNasc,
            sobrenome: req.body.sobrenome,
            telefone: req.body.telefone,
            rendaMensal: req.body.rendaMensal,
            rua: req.body.rua,
            numero: req.body.numero,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            cep: req.body.cep,
        });
        pfModel.findByIdAndUpdate({_id: req.params.id}, gameUpdate, function(err, response){
            if(err) res.send(err);
            res.send(response);
        });
        });

        app.put('/updatepj/:id', function(req, res){
            var pjModel = new pjModel({
                _id: req.params.id,
                cnpj: req.body.cnpj,
                telefone: req.body.telefone,
                rua: req.body.rua,
                numero: req.body.numero,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                estado: req.body.estado,
                cep: req.body.cep,
            });
            pfModel.findByIdAndUpdate({_id: req.params.id}, gameUpdate, function(err, response){
                if(err) res.send(err);
                res.send(response);
            });
            });
};
