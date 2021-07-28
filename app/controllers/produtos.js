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

module.exports.listarProdutosPorId = function (req,res){
    
    let id = req.params.id;
    
    let promise = Produto.find({id_loja:id}).exec();
    promise.then(function(produtos){
      res.status(200).json(produtos)
    }).catch(function(error){
      res.status(400).json({mensagem:"produto não encontrado"});
    })
}
