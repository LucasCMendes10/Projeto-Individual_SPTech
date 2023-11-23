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

function contagemTentativas(fkUsuario, fkJogo) {
    var instrucao = `
        select count(fkUsuario) as Tentativas from userJogo where fkUsuario = ${fkUsuario} and fkJogo = ${fkJogo};
    `;
    return database.executar(instrucao);
}

function registrarConquistas(fkConquista, fkUsuario, fkJogo, id) {
    var instrucao = `
        update userJogo set fkConquista = ${fkConquista} where fkUsuario = ${fkUsuario} and fkJogo = ${fkJogo} and id = ${id};
    `;
    return database.executar(instrucao);
}

function contagemConquistas(fkUsuario, fkJogo) {
    var instrucao = `
        select count(distinct fkConquista) as numConquistas from userJogo where fkUsuario = ${fkUsuario} and fkJogo = ${fkJogo} and fkConquista is not null;
    `;
    return database.executar(instrucao);
}

function verificarConquistas(fkUsuario, fkJogo, fkConquista) {
    var instrucao = `
        select * from userJogo where fkUsuario = ${fkUsuario} and fkJogo = ${fkJogo} and fkConquista = ${fkConquista};
    `;
    return database.executar(instrucao);
}

module.exports = {
    registrarProgressoInicial,
    registrarSave,
    carregarSave,
    contagemTentativas,
    registrarConquistas,
    contagemConquistas,
    verificarConquistas
};