const mongoose= require("mongoose");
module.exports = function(){
    let schema = mongoose.Schema({
      usuario_fav: {
        type: mongoose.Schema.ObjectId,
        ref: "Usuario",
      },
      produto_favoritado: {
        type: mongoose.Schema.ObjectId,
        ref: "Produto",
      },
      valor_produto_favoritado: {
        type: "Number",
        required: true,
      },
      nome_produto: {
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
    })
    return mongoose.model("Carrinho", schema);
}();
