
module.exports.listarProdutos = function(req,res){
  res.json([
        {nome: "luva", valor: "12"},
        {nome: "luva cara", valor: "30"},
     ]);

} 