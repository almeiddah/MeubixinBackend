const Pet = require("../models/pet");
const viewPet = require("../view/pet");

module.exports.inserirPet = function(req,res){
    console.log("entrou em inserir");
    let pet = req.body;
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