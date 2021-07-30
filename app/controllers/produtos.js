const Produto = require("../models/produto");
const view = require("../view/protudos");

module.exports.inserirProdutos = function(req,res){
 
  let produto = req.body;
  

  let promise = Produto.create(produto);
  
  promise.then(function(produto){
    console.log(produto);
      res.status(201).json(view.render(produto));
  }).catch(function(error){
      console.log("entrou");
      res.status(400).json({mensagem:"sua requisição n deu certo", error});
  })
}

module.exports.listarProdutosPorId = function (req,res){
    
    let id = req.params.id;
    console.log("Id:",id);
    let promise = Produto.find({id_loja:id}).exec();
    promise.then(function(produtos){
      res.status(200).json(view.renderMany(produtos))
    }).catch(function(error){
      res.status(400).json({mensagem:"produto não encontrado"});
    })

}

module.exports.listarProdutosPorTipo = function (req,res){
    
  let tipo_produto = req.params.id;
  console.log("Tipo do produto:",tipo_produto);
  let promise = Produto.find({tipo_produto:tipo_produto}).exec();
  promise.then(function(produtos){
    res.status(200).json(view.renderMany(produtos))
  }).catch(function(error){
    res.status(400).json({mensagem:"Produto não encontrado"});
  })

}

module.exports.removerProduto = function(req, res){
  let id = req.params.id;
      
  let promise = Produto.findByIdAndDelete(id);
  
  promise.then(function(produto){
    res.status(200).json(view.render(produto));
  }).catch(function(error){
    res.status(500).json({mensagem:"sua requisição n deu certo"});
  });
  
}
