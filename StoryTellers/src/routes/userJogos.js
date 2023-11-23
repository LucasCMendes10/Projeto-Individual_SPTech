var express = require("express");
var router = express.Router();

var userJogoController = require("../controllers/userJogoController");

router.post("/registrarProgressoInicial", function (req, res) {
    userJogoController.registrarProgressoInicial(req, res);
})

router.put("/registrarSave", function (req, res) {
    userJogoController.registrarSave(req, res);
})

router.get("/carregarSave/:fkUsuario/:fkJogo", function (req, res) {
    userJogoController.carregarSave(req, res);
})

router.get("/contagemTentativas/:fkUsuario/:fkJogo", function (req, res) {
    userJogoController.contagemTentativas(req, res);
})

router.put("/registrarConquistas", function (req, res) {
    userJogoController.registrarConquistas(req, res);
})

router.get("/contagemConquistas/:fkUsuario/:fkJogo", function (req, res) {
    userJogoController.contagemConquistas(req, res);
})

router.get("/verificarConquistas/:fkUsuario/:fkJogo/:fkConquista", function (req, res) {
    userJogoController.verificarConquistas(req, res);
})

module.exports = router;