const controller = require("../controllers/usuarios");
const auth = require("../controllers/auth");

module.exports = function(app){

    app.post("/usuarios", controller.inserirUsuarios);

    app.post("/usuarios/signin", auth.logar);

    app.get("/usuarios/:id", controller.pesquisarUsuarioPorId);
    app.get("/usuarios/:id/produtos", controller.obterProdutos);
}