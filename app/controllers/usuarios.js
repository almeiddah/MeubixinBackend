const Usuario = require("../models/usuario")
const Produto = require("../models/produto")
const Servico = require("../models/servico")
const View = require("../view/usuarios");
const ViewProduto = require("../view/protudos");
const bcrypt = require("bcrypt");



module.exports.inserirUsuarios = function(req,res){
  
    let usuario = {

      nome_completo: req.body.nome_completo,
      email: req.body.email,
      senha: bcrypt.hashSync(req.body.senha,10),
      tipo_pessoa: req.body.tipo_pessoa,
      descricao_pessoa: req.body.descricao_pessoa,
      cidade: req.body.cidade,
      endereco: req.body.endereco,
      telefone: req.body.telefone,


    }

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

module.exports.obterServico = function(req,res){
  let id= req.params.id;
  let promise = Servico.find({usuario:id});
  promise.then(function(servicos){
      res.status(200).json(servicos);
  }).catch(function(error){
      res.status(500).json({mensagem:"Usuário não possui nenhum serviço"});
  })
}