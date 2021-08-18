const Servico = require("../models/servico");
const Usuario = require("../models/usuario");
const ViewServico =  require("../view/servicos")
const jwt = require("jsonwebtoken");

module.exports.inserirServicos = function(req,res){
    
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let servico = {
      nome_servico: req.body.servico,
      valor_servico: req.body.valor_servico,
      tipo_servico: req.body.tipo_servico,
      descricao_servico: req.body.descricao_servico,
      usuario: id_usuario_logado
    };
    let promise = Servico.create(servico);
    
    promise.then(function(servico){
      console.log(servico);
        res.status(201).json(ViewServico.render(servico));
    }).catch(function(error){
        console.log("entrou");
        res.status(400).json({mensagem:"sua requisição n deu certo", error});
    })
  }
  
  module.exports.listarServicoPorTipo = function (req,res){
    
    let tipo_servico = req.params.id;
    console.log("Tipo do servico:",tipo_servico);
    if(tipo_servico == "todos"){
        let promise = Servico.find().limit(2).populate("usuario").exec();
    promise.then(function(servicos){
      res.status(200).json(servicos)
    }).catch(function(error){
      res.status(400).json({mensagem:"Nenhum serviço"});
    })
    }else{
    
    let promise = Servico.find({tipo_servico:tipo_servico}).limit(1).populate("usuario").exec();
    promise.then(function(servicos){
      res.status(200).json(servicos)
    }).catch(function(error){
      res.status(400).json({mensagem:"Serviços nenhum desse tipo encontrados"});
    })
    }
  }

  module.exports.listarVeterinario = function (req,res){
    
    let tipo_pessoa = req.params.id;
    console.log(tipo_pessoa);
    let promise = Usuario.find({tipo_pessoa:tipo_pessoa}).limit(4).exec();
    promise.then(function(veterinarios){
      res.status(200).json(veterinarios)
    }).catch(function(error){
      res.status(400).json({mensagem:"Não existem veterinários cadastrados"});
    })
    
  }

  module.exports.removerServico = function(req, res){
    let id = req.params.id;
        
    let promise = Servico.findByIdAndDelete(id);
    
    promise.then(function(servico){
      res.status(200).json(ViewServico.render(servico));
    }).catch(function(error){
      res.status(500).json({mensagem:"sua requisição n deu certo"});
    });
    
  }
  
  