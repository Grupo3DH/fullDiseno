const multer = require("multer");
const path = require("path");


var storage = multer.diskStorage({
    destination: function (req, file, cb) {           //donde va a ir la imagen que vamos a guardar
      cb(null, path.join(__dirname, '../../public/uploads/product'))
    },
    filename: function (req, file, cb) {              //como se va a llamar ell archivo
      cb(null, req.body.name + Date.now() + path.extname(file.originalname))
    }
})
   
var upload = multer({ storage: storage })

module.exports = upload
