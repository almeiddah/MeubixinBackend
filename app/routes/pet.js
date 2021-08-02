const controller = require("../controllers/pet");
const auth =  require("../controllers/auth");

module.exports = function(app){
    
    app.use("/pets", auth.checar);
    app.post("/pets", controller.inserirPet);
    app.get("/pets/:id", controller.listarPetsPorUser);
    app.delete("/pets/:id/excluir",controller.removerPet);
}