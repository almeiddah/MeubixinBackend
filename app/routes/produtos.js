const controller = require("../controllers/produtos");

module.exports = function(app){
    app.get("/produtos", controller.listarProdutos);
}