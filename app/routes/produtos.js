const controller = require("../controllers/produtos");
const auth =  require("../controllers/auth");

module.exports = function(app){
    
    app.use("/produtos",auth.checar);

    app.post("/produtos", controller.inserirProdutos);
    app.get("/produtos/get", controller.listarProdutos);
    app.get("/produtos/:id", controller.listarProdutosPorloja);
    app.get("/produtoscategoria/:id", controller.listarProdutosPorTipo);
    app.delete("/produtos/:id",controller.removerProduto);
}