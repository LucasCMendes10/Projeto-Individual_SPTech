var express = require("express");
var router = express.Router();

var userJogoController = require("../controllers/userJogoController");

router.post("/registrar-progresso", function (req, res) {
    userJogoController.registrarProgresso(req, res);
})

module.exports = router;