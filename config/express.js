const express = require('express');
const routerProdutos = require("../app/routes/produtos")
const bodyParser = require("body-parser");

module.exports = function(){
    let app = express();
    app.set("port", 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(express.static("./public"));
    routerProdutos(app);
    return app;
};