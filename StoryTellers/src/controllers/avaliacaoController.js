var avaliacaoModel = require("../models/avaliacaoModel");

function registrarAvaliacao(req, res) {
    var fkJogo = req.body.fkJogoServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var qtdEstrela = req.body.qtdEstrelaServer;

    avaliacaoModel.registrarAvaliacao(fkJogo, fkUsuario, qtdEstrela)
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

function verificarAvaliacao(req, res) {
    var fkJogo = req.params.fkJogo;
    var fkUsuario = req.params.fkUsuario;

    avaliacaoModel.verificarAvaliacao(fkJogo, fkUsuario)
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

function exibirAvaliacoes(req, res) {

    avaliacaoModel.exibirAvaliacoes()
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
    registrarAvaliacao,
    verificarAvaliacao,
    exibirAvaliacoes
}