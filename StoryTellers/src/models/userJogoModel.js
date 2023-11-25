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

function registrarSaveBackground(saveBackground, fkUsuario, fkJogo, id) {
    var instrucao = `
        update userJogo set saveBackground = '${saveBackground}' where fkUsuario = ${fkUsuario} and fkJogo = ${fkJogo} and id = ${id};
    `;
    return database.executar(instrucao);
}

function carregarSave(fkUsuario, fkJogo) {
    var instrucao = `
        select save from userJogo where fkUsuario = ${fkUsuario} and fkJogo = ${fkJogo} order by dtProgresso desc limit 1;
    `;
    return database.executar(instrucao);
}

function carregarSaveBackground(fkUsuario, fkJogo) {
    var instrucao = `
        select saveBackground from userJogo where fkUsuario = ${fkUsuario} and fkJogo = ${fkJogo} order by dtProgresso desc limit 1;
    `;
    return database.executar(instrucao);
}

function carregarTentativa(fkUsuario, fkJogo) {
    var instrucao = `
        select id from userJogo where fkUsuario = ${fkUsuario} and fkJogo = ${fkJogo} order by dtProgresso desc limit 1;
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

function exibirFinaisJogo1() {
    var instrucao = `
        select count(fkConquista) as qtdConquista1,
              (select count(fkConquista) from userJogo where fkConquista = 2 and fkJogo = 1) as qtdConquista2,
              (select count(fkConquista) from userJogo where fkConquista = 3 and fkJogo = 1) as qtdConquista3
        from userJogo
        where fkConquista = 1 and fkJogo = 1;
    `;
    return database.executar(instrucao);
}

module.exports = {
    registrarProgressoInicial,
    registrarSave,
    registrarSaveBackground,
    carregarSave,
    carregarSaveBackground,
    carregarTentativa,
    contagemTentativas,
    registrarConquistas,
    contagemConquistas,
    verificarConquistas,
    exibirFinaisJogo1
};