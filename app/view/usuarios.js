function render(usuario){
    return {
        
        id: usuario._id,
        Nome: usuario.nome_completo,
        Email: usuario.email,
        Tipo: usuario.tipo_pessoa,
        Descrição: usuario.descricao_pessoa,
        Cidade: usuario.cidade,
        Endereço: usuario.endereco,
        Telefone: usuario.telefone,
        

    }
}
module.exports.render = render;

function renderMany(usuarios){
    return usuarios.map(render);
}
module.exports.renderMany = renderMany;
