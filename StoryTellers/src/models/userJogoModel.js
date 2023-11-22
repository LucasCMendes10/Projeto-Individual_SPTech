var database = require("../database/config");

function registrarProgressoInicial(fkUsuario, fkJogo) {    
    var instrucao = `
        INSERT INTO userJogo (fkUsuario, fkJogo) VALUES (${fkUsuario}, ${fkJogo});
    `;
    return database.executar(instrucao);
}

function registrarSave(save, fkUsuario, fkJogo, id) {
    var instrucao = `
        update userJogo set save = '${save}' where fkUsuario = ${fkUsuario} and fkJogo = ${fkJogo} and id = ${id};
    `;
    return database.executar(instrucao);
}

function carregarSave(fkUsuario, fkJogo) {
    var instrucao = `
        select save from userJogo where fkUsuario = ${fkUsuario} and fkJogo = ${fkJogo} order by dtProgresso desc limit 1;
    `;
    return database.executar(instrucao);
}

module.exports = {
    registrarProgressoInicial,
    registrarSave,
    carregarSave
};