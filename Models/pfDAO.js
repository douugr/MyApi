module.exports = function(app){
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pfSchema = new Schema({
    cpf: String,
    nome: String,
    dtNasc: String,
    sobrenome: String,
    telefone: String,
    rendaMensal: Number,
    rua: String,
    numero: String,
    bairro: String,
    cidade: String,
    estado: String,
    cep: String,
});

return mongoose.model('pfModel', pfSchema);

}