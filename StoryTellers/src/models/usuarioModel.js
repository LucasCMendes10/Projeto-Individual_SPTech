var database = require("../database/config");

function autenticar(nomeUsuario, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", nomeUsuario, senha)
    var instrucao = `
        SELECT idUsuario, nomeCompleto, dtNasc, nomeUsuario, senha FROM usuario WHERE nomeUsuario = '${nomeUsuario}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nomeCompleto, dtNasc, nomeUsuario, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeCompleto, dtNasc, nomeUsuario, senha);
    
    var instrucao = `
        INSERT INTO usuario (nomeCompleto, dtNasc, nomeUsuario, senha) VALUES ('${nomeCompleto}', '${dtNasc}', '${nomeUsuario}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar
};