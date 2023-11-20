var conquistaModel = require("../models/conquistaModel");

function listarConquistasJogo1(req, res) {

    conquistaModel.listarConquistasJogo1()
        .then(
            function (resultadoListarConquistaJogo1) {
                if (resultadoListarConquistaJogo1.length == 0) {
                    res.status(400).send('Problema na listagem de conquistas');
                } else {
                    res.status(201).json(resultadoListarConquistaJogo1);
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao listar as conquistas! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
}

module.exports = {
    listarConquistasJogo1
}