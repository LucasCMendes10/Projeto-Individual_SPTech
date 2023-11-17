var usuarioModel = require("./usuarioModel");

function registrarProgresso(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkJogo = req.body.fkJogoServer;
    var save = req.body.saveServer;

        usuarioModel.cadastrar(fkUsuario, fkJogo, save)
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
    registrarProgresso
}