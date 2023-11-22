var userJogoModel = require("../models/userJogoModel");

function registrarProgressoInicial(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkJogo = req.body.fkJogoServer;

    userJogoModel.registrarProgressoInicial(fkUsuario, fkJogo)
        .then(
            function (resultado) {
                res.status(201).json(resultado.insertId);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).send("Erro ao gerar progresso!");
            }
        );
}

function registrarSave(req, res) {
    var save = req.body.saveServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var fkJogo = req.body.fkJogoServer;
    var id = req.body.idServer;

    userJogoModel.registrarSave(save, fkUsuario, fkJogo, id)
        .then(
            function (resultado) {
                res.status(201).json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).send("Erro ao gerar progresso!");
            }
        );
}

function carregarSave(req, res) {
    var fkUsuario = req.params.fkUsuario;
    var fkJogo = req.params.fkJogo;

    userJogoModel.carregarSave(fkUsuario, fkJogo)
        .then(
            function (resultado) {
                res.status(201).json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).send("Erro ao gerar progresso!");
            }
        );
}

module.exports = {
    registrarProgressoInicial,
    registrarSave,
    carregarSave
}