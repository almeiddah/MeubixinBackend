const express = require('express');
const routerProdutos = require("../app/routes/produtos")
const routerUsuarios = require("../app/routes/usuarios")
const routerServicos = require("../app/routes/servicos")
const routerCarrinho = require("../app/routes/carrinho")
const routerPets = require("../app/routes/pet");
const bodyParser = require("body-parser");

module.exports = function(){
    let app = express();
    app.set("port", 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(express.static("./public"));
    routerProdutos(app);
    routerServicos(app);
    routerUsuarios(app);
    routerPets(app);
    routerCarrinho(app);
    return app;
};