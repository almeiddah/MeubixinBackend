const Pet = require("../models/pet");
const viewPet = require("../view/pet");
const jwt = require("jsonwebtoken");

module.exports.inserirPet = function(req,res){
    
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let pet = {
      id_usuario: id_usuario_logado,
      nome_pet: req.body.nome_pet,
      descricao_pet: req.body.descricao_pet,
      especie: req.body.especie,
      raca: req.body.raca,
      sexo: req.body.sexo,
      peso: req.body.peso,
      idade: req.body.idade

    }
    
    let promise = Pet.create(pet);

    promise.then(function(pet){
        res.status(201).json(viewPet.render(pet));
    }).catch(function(error){
        res.status(400).json({mensagem:"Pet não registrado", error});
    })
  }

  module.exports.removerPet = function(req, res){
    
    let id = req.params.id;
    let promise = Pet.findByIdAndDelete(id);
    
    promise.then(function(pet){
      res.status(200).json(viewPet.render(pet));
    }).catch(function(error){
      res.status(500).json({mensagem:"Não foi possivel remover pet"});
    });
    
  }

  module.exports.listarPetsPorUser = function (req,res){
    
    let id = req.params.id;
    let promise = Pet.find({id_usuario:id}).exec();
    promise.then(function(pets){
      res.status(200).json(viewPet.renderMany(pets))
    }).catch(function(error){
      res.status(400).json({mensagem:"User não encontrado"});
    })

}