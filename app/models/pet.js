const mongoose= require("mongoose");
module.exports = function(){
    let schema = mongoose.Schema({
      id_usuario: {
        type: mongoose.Schema.ObjectId,
        ref: "Usuario",
      },
      nome_pet: {
        type: "String",
        required: true,
      },
      descricao_pet: {
        type: "String",
        required: true,
      },  
      especie: {
        type: "String",
        required: true,
      },
      raca: {
        type: "String",
        required: true,
      },
      sexo: {
        type: "String",
        required: true,
      },
      peso: {
        type: "String",
        required: true,
      },
      idade: {
        type: "String",
        required: true,
      },


    })
    return mongoose.model("Pet", schema);
}();
