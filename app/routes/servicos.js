const controller = require("../controllers/servicos");
const auth = require("../controllers/auth");

module.exports = function(app){

    app.use("/produtos",auth.checar);
    app.post("/servicos", controller.inserirServicos);
    app.get("/servicocategoria/:id", controller.listarServicoPorTipo);
    app.delete("/servicos/:id", controller.removerServico);
}