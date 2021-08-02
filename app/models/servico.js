const mongoose= require("mongoose");
module.exports = function(){
    let schema = mongoose.Schema({
      nome_servico: {
          type: "String",
          required: true,
      },
      valor_servico: {
        type: "String",
        required: true,
      },
      tipo_servico: {
        type: "String",
        required: true,
      },
      descricao_servico: {
        type: "String",
        required: true,
      },  
      usuario: {
        type: mongoose.Schema.ObjectId,
        ref: "Usuario",
      },
    })
    return mongoose.model("Servico", schema);
}();
