const mongoose= require("mongoose");
module.exports = function(){
    let schema = mongoose.Schema({
      nome_completo: {
          type: "String",
          required: true,
      },
      email: {
        type: "String",
        required: true,
      },
      senha: {
        type: "String",
        required: true,
      },
      tipo_pessoa: {
        type: "String",
        required: true,
      },
      descricao_pessoa: {
        type: "String",
        required: true,
      },  
      cidade: {
        type: "String",
        required: true,
      },
      endereco: {
        type: "String",
        required: true,
      },
      telefone: {
        type: "String",
        required: true,
      },
      

    })
    return mongoose.model("Usuario", schema);
}();
