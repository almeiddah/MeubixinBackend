const controller = require("../controllers/produtos");

module.exports = function(app){

    app.post("/produtos", controller.inserirProdutos);
    app.get("/produtos/:id", controller.listarProdutosPorloja);
    app.get("/produtoscategoria/:id", controller.listarProdutosPorTipo);
    app.delete("/produtos/:id",controller.removerProduto);
}