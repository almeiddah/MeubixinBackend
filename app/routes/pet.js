const controller = require("../controllers/pet");
const auth =  require("../controllers/auth");

module.exports = function(app){
    
    app.use("/pets", auth.checar);
    app.post("/pets", controller.inserirPet);
    app.get("/petsporuser/:id", controller.listarPetsPorUser);
    app.get("/pets/:id", controller.listarPets);
    app.delete("/pets/:id/excluir",controller.removerPet);
}