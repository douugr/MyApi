var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({}));

consign()
  .include('Models')
  .then('Config')
  .then('Get')
  .then('Cadastro')
  .then('Delete')
  .then('Update')
  .into(app);

app.listen(3000, function(err){
  if(err) throw err;
  console.log('Servidor rodando na porta 3000');
});
mongoose.connect(app.Config.config.dbConnection);

module.exports = app;
