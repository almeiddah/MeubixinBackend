const Servico = require("../models/servico");
const ViewServico =  require("../view/servicos")

module.exports.inserirServicos = function(req,res){
 
    let servico = req.body;
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
        let promise = Servico.find().exec();
    promise.then(function(servicos){
      res.status(200).json(ViewServico.renderMany(servicos))
    }).catch(function(error){
      res.status(400).json({mensagem:"Nenhum serviço"});
    })
    }
    
    let promise = Servico.find({tipo_servico:tipo_servico}).exec();
    promise.then(function(servicos){
      res.status(200).json(ViewServico.renderMany(servicos))
    }).catch(function(error){
      res.status(400).json({mensagem:"Serviços nenhum desse tipo encontrados"});
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
  
  