const controller = require("../controllers/servicos");

module.exports = function(app){
    app.post("/servicos", controller.inserirServicos);
    app.get("/servicocategoria/:id", controller.listarServicoPorTipo);
    app.delete("/servicos/:id", controller.removerServico);
}