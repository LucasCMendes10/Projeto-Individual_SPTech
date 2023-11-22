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

module.exports = router;