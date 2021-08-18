const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.logar = function(req, res){
   
Usuario.findOne({email:req.body.email})
    .then(function(user){ 

        if(bcrypt.compareSync(req.body.senha, user.senha)){
           let token = jwt.sign({id: user._id}, "senha_secreta"); 
            res.status(200).json({token:token, nome_completo:user.nome_completo, _id:user._id});
        }else{
            res.status(401).send("errou parceira");
        }
    })
}

module.exports.checar = function(req,res, next){ 
    let token = req.headers.token;
    jwt.verify(token, "senha_secreta",function(err, decoded){
        if (err){
            res.status(401).send("token invalido!");
        }else{
            next();
        }
    })
}