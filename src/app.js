const express = require("express");
const app = express();
const path = require("path");

const methodOverride = require("method-override"); // PARA USAR PUT Y DELETE
const session = require("express-session");
const cookieParser = require("cookie-parser");

const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");
const productsRouter = require("./routes/productsRouter");



app.use("/index", indexRouter); // RECURSO INDEX
app.use("/user", userRouter); // RECURSO USER
app.use("/products", productsRouter); // RECURSO PRODUCTS

app.use(cookieParser());

app.use(session({secret:"La banda de Luxo", resave: true,
saveUninitialized: true})); //middleware a nivel de aplicacion, preguntar porque agregue esas dos lineas resave y saveu

app.use(methodOverride("_method")); // para put y delete en la action del form le ponemos action="RUTA?_method=put o delete"

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));  // LE INDICAMOS QUE COMO MOTOR DE VISTA UTILIZAREMOS EJS

app.use(express.static(path.join(__dirname, '../public'))); // DISPONIBILIZAMOS LA CARPETA PUBLIC

app.use(function(req,res,next){
    res.status(404).render(__dirname, "not-found")    //ERROR 404
})

app.listen(3000, function(){
    console.log("El servidor está corriendo en el puerto 3000")
});  // ponemos el servidor a correr en el puerto 3000


//Soy jero me estoy logueando en otra pc porque me voy de vacas y me llevo la notebook :) NOMEDENBOLA