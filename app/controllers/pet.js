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
      console.log("entrou no back", error);
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

  module.exports.listarPets = function (req,res){
    let id = req.params.id;
    if(id=="Todos"){
      let promise = Pet.find().populate('id_usuario').exec();
    promise.then(function(pets){
      res.status(200).json(pets)
    }).catch(function(error){
      res.status(400).json({mensagem:"Pets não encontrado"});
    })
    }else{
      let promise = Pet.find({especie:id}).populate('id_usuario').exec();
      promise.then(function(pets){
        res.status(200).json(pets)
      }).catch(function(error){
        res.status(400).json({mensagem:"Pets não encontrado"});
      })
    }
   

}

module.exports.listarPet = function (req,res){
  let id = req.params.id;

    let promise = Pet.find({_id:id}).populate('id_usuario').exec();
    promise.then(function(pets){
      res.status(200).json(pets)
    }).catch(function(error){
      res.status(400).json({mensagem:"Pets não encontrado"});
    })
  

}




  module.exports.listarPetsPorUser = function (req,res){
    
    let id = req.params.id;
    let promise = Pet.find({id_usuario:id}).populate('id_usuario').sort({$natural:-1}).limit(2).exec();
    promise.then(function(pets){
      res.status(200).json(pets)
    }).catch(function(error){
      res.status(400).json({mensagem:"User não encontrado"});
    })

}