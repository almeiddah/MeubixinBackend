const mongoose= require("mongoose");
module.exports = function(){
    let schema = mongoose.Schema({
      nome: {
          type: "String",
          required: true,
      },
      valor: {
        type: "String",
        required: true,
      }  
    })
    return mongoose.model("Produto", schema);
}();
