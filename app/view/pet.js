function render(pet){
    return {
        
        Nome: pet.nome_pet,
        Descricao: pet.descricao_pet,
        Especie: pet.especie,
        Raca: pet.raca,
        Sexo: pet.sexo,
        Peso: pet.peso,
        Idade: pet.idade,
        

    }
}
module.exports.render = render;

function renderMany(produtos){
    return produtos.map(render);
}
module.exports.renderMany = renderMany;
