const express = require("express");
const router = express.Router(); // guardo solo la funcionalidad de router de express
const indexController = require("../controllers/indexController");


router.get("/", indexController.index);


module.exports = router;