const express = require("express");
const app = express();
const path = require("path");
const indexRouter = require("./routes/indexRouter");



app.use("/", indexRouter);



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));  // le indicamos que como motor de vista utilizaremos ejs

app.use(express.static(path.join(__dirname, '../public'))); // disponibilizamos la carpeta public

app.listen(3000, function(){
    console.log("El servidor está corriendo en el puerto 3000")
});  // ponemos el servidor a correr en el puerto 3000