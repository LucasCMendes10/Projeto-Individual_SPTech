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

function cadastrar(nomeCompleto, dtNasc, nomeUsuario, senha) {    
    var instrucao = `
        INSERT INTO usuario (nomeCompleto, dtNasc, nomeUsuario, senha) VALUES ('${nomeCompleto}', '${dtNasc}', '${nomeUsuario}', '${senha}');
    `;
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar,
    listarNomeUsuario
};