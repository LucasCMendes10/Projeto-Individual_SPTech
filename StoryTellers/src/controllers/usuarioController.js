var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var nomeUsuario = req.body.nomeUsuarioServer;
    var senha = req.body.senhaServer;

    if (nomeUsuario == undefined) {
        res.status(400).send("Seu nome de usuario está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(nomeUsuario, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
                            .then((resultadoAquarios) => {
                                if (resultadoAquarios.length > 0) {
                                    res.json({
                                        nomeUsuario: resultadoAutenticar[0].nomeUsuario,
                                        senha: resultadoAutenticar[0].senha
                                    });
                                } else {
                                    res.status(204).json({ aquarios: [] });
                                }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Nome de usuario e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
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