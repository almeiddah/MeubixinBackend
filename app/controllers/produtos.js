const Produto = require("../models/produto");
const view = require("../view/protudos");
const jwt = require("jsonwebtoken");

module.exports.inserirProdutos = function(req,res){
  console.log("entrou no backend");

  let token = req.headers.token;
  let payload = jwt.decode(token);
  let id_usuario_logado = payload.id;

  let produto = {
    nome_produto: req.body.nome_produto,
    valor_produto: req.body.valor_produto,
    tipo_produto: req.body.tipo_produto,
    descricao_produto: req.body.descricao_produto,
    usuario: id_usuario_logado
  };
  
  let promise = Produto.create(produto);
  
  promise.then(function(produto){
    console.log(produto);
      res.status(201).json(view.render(produto));
  }).catch(function(error){
      console.log("entrou");
      res.status(400).json({mensagem:"sua requisição n deu certo", error});
  })
}

module.exports.listarProdutosPorloja = function (req,res){
    
    let id = req.params.id;
    console.log("Id:",id);
    let promise = Produto.find({usuario:id}).exec();
    promise.then(function(produtos){
      res.status(200).json(view.renderMany(produtos))
    }).catch(function(error){
      res.status(400).json({mensagem:"produto não encontrado"});
    })

}
module.exports.listarProdutosPorID = function (req,res){
    
  let id = req.params.id;
  console.log("Id:",id);
  let promise = Produto.find({_id:id}).populate('usuario').exec();
  promise.then(function(produtos){
    res.status(200).json(produtos)
  }).catch(function(error){
    res.status(400).json({mensagem:"produto não encontrado"});
  })

}



module.exports.listarProdutos = function (req,res){


  let promise = Produto.find().sort({$natural:-1}).limit(4).populate('usuario').exec();
  promise.then(function(produtos){
    res.status(200).json(produtos)
  }).catch(function(error){
    res.status(400).json({mensagem:"produto não encontrado"});
  })

}


module.exports.listarProdutosPorTipo = function (req,res){
    
  let categoria = req.params.id;
  let limite;
  
  if(categoria=="brinquedo" || categoria=="arte"){
      limite=2;
  }else{
    limite=4;
  }

  console.log("Limite:",limite);

  let tipo_produto = req.params.id;
  console.log("Tipo do produto:",tipo_produto);
  
  let promise = Produto.find({tipo_produto:tipo_produto}).sort({$natural:-1}).limit(limite).populate('usuario').exec();
  promise.then(function(produtos){
    res.status(200).json(produtos)
  }).catch(function(error){
    res.status(400).json({mensagem:"Produto não encontrado"});
  })

}

module.exports.removerProduto = function(req, res){
  let id = req.params.id;
    console.log("entrou no back", id);
  let promise = Produto.findByIdAndDelete(id);
  
  promise.then(function(produto){
    res.status(200).json(view.render(produto));
  }).catch(function(error){
    res.status(500).json({mensagem:"sua requisição n deu certo"});
  });
  
}
