var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var nomeUsuario = req.body.nomeUsuarioServer;
    var senha = req.body.senhaServer;

    if (nomeUsuario == "") {
        res.status(400).send("Insira um usuário válido!");
    } else if (senha == "") {
        res.status(400).send("Insira uma senha válida!");
    } else {
        usuarioModel.autenticar(nomeUsuario, senha)
            .then(
                function (resultadoAutenticar) {
                    if (resultadoAutenticar.length == 0) {
                        res.status(400).send('Usuário e/ou senha inválidos!');
                    } else {
                        res.status(201).json(resultadoAutenticar);
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nomeCompleto = req.body.nomeCompletoServer;
    var dtNasc = req.body.dtNascServer;
    var nomeUsuario = req.body.nomeUsuarioServer;
    var senha = req.body.senhaServer;

        usuarioModel.cadastrar(nomeCompleto, dtNasc, nomeUsuario, senha)
            .then(
                function (resultado) {
                    res.status(201).json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    res.status(500).send("Esse usuário já existe!");
                }
            );
}

module.exports = {
    autenticar,
    cadastrar
}