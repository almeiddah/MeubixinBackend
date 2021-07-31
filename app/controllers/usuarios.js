const Usuario = require("../models/usuario")
const Produto = require("../models/produto")
const View = require("../view/usuarios");
const ViewProduto = require("../view/protudos");
const produto = require("../models/produto");


module.exports.inserirUsuarios = function(req,res){
    let usuario = req.body;

  let promise = Usuario.create(usuario);
  
  promise.then(function(usuario){
    console.log(usuario);
      res.status(201).json(View.render(usuario));
  }).catch(function(error){
      console.log("entrou");
      res.status(400).json({mensagem:"sua requisição n deu certo", error});
  })
}

module.exports.pesquisarUsuarioPorId = function (req,res){
    
    let id = req.params.id;
    console.log("Id:",id);
    let promise = Usuario.find({_id:id}).exec();
    promise.then(function(usuario){
      res.status(200).json(View.renderMany(usuario));
    }).catch(function(error){
      res.status(400).json({mensagem:"Usuario não encontrado", error});
    })

}

module.exports.obterProdutos = function(req,res){
    let id= req.params.id;
    let promise = Produto.find({usuario:id});
    promise.then(function(produtos){
        res.status(200).json(ViewProduto.renderMany(produtos));
    }).catch(function(error){
        res.status(500).json({mensagem:"Usuário não possui nenhum produto"});
    })
}