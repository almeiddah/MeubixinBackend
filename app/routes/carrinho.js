const controller = require("../controllers/carrinho");
const auth =  require("../controllers/auth");

module.exports = function(app){
    
    app.use("/carrinho",auth.checar);

    app.post("/carrinho", controller.inserirPodutoCarrinho);
    app.delete("/carrinho/:id", controller.desfavoritarProduro);
    app.get("/carrinho/:id", controller.listarProdutosFavoritadosPorUsuario);

}