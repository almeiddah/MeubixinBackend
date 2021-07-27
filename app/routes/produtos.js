const controller = require("../controllers/produtos");

module.exports = function(app){
    app.post("/produtos", controller.inserirProdutos);
}