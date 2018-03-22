module.exports = function(app){
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pjSchema = new Schema({
    cnpj: String,
    razaoSocial: String,
    telefone: String,
    rua: String,
    numero: String,
    bairro: String,
    cidade: String,
    estado: String,
    cep: String,
});

return mongoose.model('pjModel', pjSchema);

}