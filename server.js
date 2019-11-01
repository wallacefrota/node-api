//importando as bibliotecas
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//executando o app a função retornada express
const app = express();
//permitindo enviar dados para a aplicação no formato json.
app.use(express.json());
//permitindo a api ser acessada publicamente. Dentro posso permitir quais dominios terão acesso.
app.use(cors());

//iniciando o db e fazendo conexão
mongoose.connect("mongodb://192.168.99.102:27017/node-api",
{ useNewUrlParser: true});

//dando um requireDir no model criado os product
requireDir("./src/models/");

//Rotas = utilizando o routes exportado. use = recebe todo tipo de requisição
//quando receber uma requisição pelo /api > mandar pro routes 
app.use("/api", require("./src/routes"));

//utilizando a porta
app.listen(3001);