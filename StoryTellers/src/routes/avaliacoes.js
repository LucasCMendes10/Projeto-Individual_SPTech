var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

router.post("/registrarAvaliacao", function (req, res) {
    avaliacaoController.registrarAvaliacao(req, res);
})

router.get("/verificarAvaliacao/:fkJogo/:fkUsuario", function (req, res) {
    avaliacaoController.verificarAvaliacao(req, res);
})

router.get("/exibirAvaliacoes", function (req, res) {
    avaliacaoController.exibirAvaliacoes(req, res);
})

module.exports = router;