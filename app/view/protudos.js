function render(produto){
    return {
        
        id: produto._id,
        Nome: produto.nome_produto,
        Preço: produto.valor_produto,
        Categoria: produto.tipo_produto,
        Descrição: produto.descricao_produto,
        

    }
}
module.exports.render = render;

function renderMany(produtos){
    return produtos.map(render);
}
module.exports.renderMany = renderMany;
