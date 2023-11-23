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

function registrarSaveBackground(req, res) {
    var saveBackground = req.body.saveBackgroundServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var fkJogo = req.body.fkJogoServer;
    var id = req.body.idServer;

    userJogoModel.registrarSaveBackground(saveBackground, fkUsuario, fkJogo, id)
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

function carregarSaveBackground(req, res) {
    var fkUsuario = req.params.fkUsuario;
    var fkJogo = req.params.fkJogo;

    userJogoModel.carregarSaveBackground(fkUsuario, fkJogo)
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

function carregarTentativa(req, res) {
    var fkUsuario = req.params.fkUsuario;
    var fkJogo = req.params.fkJogo;

    userJogoModel.carregarTentativa(fkUsuario, fkJogo)
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

function contagemTentativas(req, res) {
    var fkUsuario = req.params.fkUsuario;
    var fkJogo = req.params.fkJogo;

    userJogoModel.contagemTentativas(fkUsuario, fkJogo)
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

function registrarConquistas(req, res) {
    var fkConquista = req.body.fkConquistaServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var fkJogo = req.body.fkJogoServer;
    var id = req.body.idServer;

    userJogoModel.registrarConquistas(fkConquista, fkUsuario, fkJogo, id)
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

function contagemConquistas(req, res) {
    var fkUsuario = req.params.fkUsuario;
    var fkJogo = req.params.fkJogo;

    userJogoModel.contagemConquistas(fkUsuario, fkJogo)
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

function verificarConquistas(req, res) {
    var fkUsuario = req.params.fkUsuario;
    var fkJogo = req.params.fkJogo;
    var fkConquista = req.params.fkConquista;

    userJogoModel.verificarConquistas(fkUsuario, fkJogo, fkConquista)
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
    registrarSaveBackground,
    carregarSave,
    carregarSaveBackground,
    carregarTentativa,
    contagemTentativas,
    registrarConquistas,
    contagemConquistas,
    verificarConquistas
}