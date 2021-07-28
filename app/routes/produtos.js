const controller = require("../controllers/produtos");

module.exports = function(app){

    app.get("/produtos/:id", controller.listarProdutosPorId);
    app.post("/produtos", controller.inserirProdutos);
   
}