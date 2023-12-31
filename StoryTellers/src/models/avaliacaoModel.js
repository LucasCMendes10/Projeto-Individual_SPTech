var database = require("../database/config");

function registrarAvaliacao(fkJogo, fkUsuario, qtdEstrela) {    
    var instrucao = `
        INSERT INTO avaliacao (fkJogo, fkUsuario, qtdEstrela) VALUES (${fkJogo}, ${fkUsuario}, ${qtdEstrela});
    `;
    return database.executar(instrucao);
}

function verificarAvaliacao(fkJogo, fkUsuario) {    
    var instrucao = `
        select qtdEstrela from avaliacao where fkJogo = ${fkJogo} and fkUsuario = ${fkUsuario};
    `;
    return database.executar(instrucao);
}

function exibirAvaliacoes() {    
    var instrucao = `
        select qtdEstrela, count(qtdEstrela) as qtdAvaliacao from avaliacao group by qtdEstrela order by qtdEstrela;
    `;
    return database.executar(instrucao);
}

module.exports = {
    registrarAvaliacao,
    verificarAvaliacao,
    exibirAvaliacoes
};