const controller = require("../controllers/usuarios")

module.exports = function(app){
    app.post("/usuarios", controller.inserirUsuarios);
    app.get("/usuarios/:id", controller.pesquisarUsuarioPorId);
    app.get("/usuarios/:id/produtos", controller.obterProdutos);
}