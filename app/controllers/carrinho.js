const Carrinho = require("../models/carrinho");
const Produto = require("../models/produto");
const jwt = require("jsonwebtoken");

module.exports.inserirPodutoCarrinho = function(req,res){ 
    
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promisse = Produto.find({_id: req.body.produto_favoritado}).exec();

    promisse.then(function(produto_find){
        produto1 = produto_find;
        const {_id, nome_produto, valor_produto, tipo_produto, descricao_produto, usuario} = produto_find[0];
        
        let produto = {
            usuario_fav: id_usuario_logado,
            produto_favoritado :  _id,
            valor_produto_favoritado: valor_produto,
            nome_produto : nome_produto,
            tipo_produto:tipo_produto,
            descricao_produto:descricao_produto,

        }
        
      let promise = Carrinho.create(produto);
      promise.then(function(produto_fav){
      res.status(201).json(produto_fav);
}).catch(function(error){
  console.log("entrou");
  res.status(400).json({mensagem:"sua requisição n deu certo", error});
})
    })
    
  }

module.exports.listarProdutosFavoritadosPorUsuario = function (req,res){
    
    let id = req.params.id;
    console.log("Id:",id);
    let total=0;

    let promise = Carrinho.find({usuario_fav:id}).populate('usuario_fav').exec();
    
    promise.then(function(produtos){
        
        for(var produto in produtos){
            const {_id, usuario_fav, produto_favoritado, valor_produto_favoritado
            , nome_produto, tipo_produto, descricao_produto} = produtos[produto];
            total = total + valor_produto_favoritado;
            console.log(valor_produto_favoritado);
        }
        
        console.log("Total: ", total);
      
        res.status(200).json(produtos)
    }).catch(function(error){
      res.status(400).json({mensagem:"Sem produtos favoritados"});
    })

}

  module.exports.desfavoritarProduro = function(req, res){
    let id = req.params.id;
        
    let promise = Carrinho.findByIdAndDelete(id);
    
    promise.then(function(produto){
      res.status(200).json(produto);
    }).catch(function(error){
      res.status(500).json({mensagem:"sua requisição n deu certo"});
    });
    
  }
 