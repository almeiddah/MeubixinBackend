function render(servico){
    return {
        
        id: servico._id,
        Nome: servico.nome_servico,
        Preço: servico.valor_servico,
        Categoria: servico.tipo_servico,
        Descrição: servico.descricao_servico,
        

    }
}
module.exports.render = render;

function renderMany(servicos){
    return servicos.map(render);
}
module.exports.renderMany = renderMany;