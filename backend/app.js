const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');

app.use (bodyParser.json());

const mensagens = [
  {
    id: '1',
    mensagem: 'Use Máscara!',
  },
  {
    id: '2',
    mensagem: 'Vacine-se o quanto antes possível!',
  }
]

app.use ((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');

  next();
});

app.post ('/api/mensagens', (req, res, next) => {
  const mensagem = req.body;
  mensagens.push(mensagem);
  res.status(201).json({mensagem: 'Mensagem inserida'})
});

//middleware
app.use ('/api/mensagens',(req, res) => {
  res.status(200).json({
    mensagens ,
    mensagem: "Tudo OK",
  });
});

module.exports = app;
