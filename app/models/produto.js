const mongoose= require("mongoose");
module.exports = function(){
    let schema = mongoose.Schema({
      nome_produto: {
          type: "String",
          required: true,
      },
      valor_produto: {
        type: "Number",
        required: true,
      },
      tipo_produto: {
        type: "String",
        required: true,
      },
      descricao_produto: {
        type: "String",
        required: true,
      },  
      usuario: {
        type: mongoose.Schema.ObjectId,
        ref: "Usuario",
      },
    })
    return mongoose.model("Produto", schema);
}();
