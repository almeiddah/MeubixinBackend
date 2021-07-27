const express = require('express');
const routerProdutos = require("../app/routes/produtos")

module.exports = function(){
    let app = express();
    app.set("port", 3000);
    
    app.use(express.static("./public"));
    routerProdutos(app);
    return app;
};