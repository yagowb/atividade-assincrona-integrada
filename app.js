var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});


app.listen(3001, function(erro){
  if(erro){
      console.log("Erro ao iniciar servidor");
  }else{
      console.log("Servidor iniciado com sucesso");
  }
})


//SOMA//
app.post('/soma', function(req, res){
    var body = req.body;
    var resultado = soma(body.a, body.b);

    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
  });

  function soma(a, b) {
    return a + b;
  }
  

  //SUBTRAÇÃO//
  app.post('/sub', function(req,res){
    var body = req.body;
    var resultado = sub(body.a, body.b);

    res.send(`O resultado da subtração entre ${body.a} e ${body.b} é ${resultado}`);
  });

  function sub(a, b){
    return a - b;
  }
  

  //MULTIPLICAÇÃO//
  app.post('/mult', function(req,res){
    var body = req.body;
    var resultado = mult(body.a, body.b);

    res.send(`O resultado da multiplicação entre ${body.a} e ${body.b} é ${resultado}`);
  });

  function mult(a, b){
    return a * b;
  }

  //DIVISÃO//
  app.post('/div', function(req,res){
    var body = req.body;
    var resultado = div(body.a, body.b);

    res.send(`O resultado da divisão entre ${body.a} e ${body.b} é ${resultado}`);
  });

  function div(a, b){
    return (a / b);
  }

