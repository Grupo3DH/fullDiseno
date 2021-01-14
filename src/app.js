const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override"); // para usar put patch y delete necesitamos esto
const indexRouter = require("./routes/indexRouter");
const loginRouter = require("./routes/loginRouter");
const productsDetailRouter = require("./routes/productsDetailRouter");
const productCartRouter = require("./routes/productCartRouter");

app.use("/", indexRouter);
app.use("/", loginRouter);
app.use("/", productsDetailRouter);
app.use("/", productCartRouter);

app.use(methodOverride("_method")); // para put y delete en la action del form le ponemos action="RUTA?_method=put o delete"

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));  // le indicamos que como motor de vista utilizaremos ejs

app.use(express.static(path.join(__dirname, '../public'))); // disponibilizamos la carpeta public






app.listen(3000, function(){
    console.log("El servidor está corriendo en el puerto 3000")
});  // ponemos el servidor a correr en el puerto 3000