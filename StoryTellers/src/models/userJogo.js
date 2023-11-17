var database = require("../database/config");

function listarNomeUsuario() {
    var instrucao = `
        SELECT nomeUsuario from usuario;
    `;
    return database.executar(instrucao);
}

function autenticar(nomeUsuario, senha) {
    var instrucao = `
        SELECT idUsuario, nomeCompleto, dtNasc, nomeUsuario, senha FROM usuario WHERE nomeUsuario = '${nomeUsuario}' AND senha = '${senha}';
    `;
    return database.executar(instrucao);
}

function registrarProgresso(fkUsuario, fkJogo, save) {    
    var instrucao = `
        INSERT INTO userJogo (fkUsuario, fkJogo, save, fkAvaliacao, fkConquista) VALUES (${fkUsuario}, ${fkJogo}, '${save}', null, null);
    `;
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    registrarProgresso,
    listarNomeUsuario
};