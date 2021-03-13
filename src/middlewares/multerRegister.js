const multer = require("multer");
const path = require("path");


var storage = multer.diskStorage({
    destination: function (req, file, cb) {           //donde va a ir la imagen que vamos a guardar
      cb(null, path.join(__dirname, '../../public/uploads/avatar'))
    },
    filename: function (req, file, cb) {              //como se va a llamar ell archivo
      cb(null, req.body.email + Date.now() + path.extname(file.originalname))
    }
})
   
var upload = multer({ storage: storage })

module.exports = upload

// en req.files es un array y puedo ver todo lo que tiene adentro, nombre del archivo de la foto, extension, fieldname, originalname, encoding, filename, size