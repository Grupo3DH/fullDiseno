const express = require("express");
const router = express.Router(); // guardo solo la funcionalidad de router de express
const path = require("path");
const multer  = require('multer'); // para subir avatars o fotos
const indexController = require("../controllers/indexController");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })


router.get("/", indexController.index)


module.exports = router;