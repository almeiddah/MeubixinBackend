const mongoose= require("mongoose");
module.exports = function(){
    let schema = mongoose.Schema({
      nome_produto: {
          type: "String",
          required: true,
      },
      valor_produto: {
        type: "String",
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
      id_loja: {
        type: "String",
        required: true,
      },
    })
    return mongoose.model("Produto", schema);
}();
