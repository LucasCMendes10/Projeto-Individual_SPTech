var express = require("express");
var router = express.Router();

var conquistaController = require("../controllers/conquistaController");

router.get("/listarConquistasJogo1", function(req, res) {
    conquistaController.listarConquistasJogo1(req, res);
});

module.exports = router;