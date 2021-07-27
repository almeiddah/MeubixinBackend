const Produto = require("../models/produto")

module.exports.inserirProdutos = function(req,res){

  let produto = req.body;

  let promise = Produto.create(produto);
  
  promise.then(function(produto){
      res.status(201).json(produto);
  }).catch(function(error){
      console.log("entrou");
      res.status(400).json({mensagem:"sua requisição n deu certo", error});
  })
}