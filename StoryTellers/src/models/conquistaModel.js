var database = require("../database/config");

function listarConquistasJogo1() {
    var instrucao = `
        SELECT fotoConquista, nomeConquista, descricaoConquista FROM conquista WHERE fkJogo = 1;
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarConquistasJogo1
};