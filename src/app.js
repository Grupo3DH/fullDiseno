const express = require("express");
const app = express();
const path = require("path");

const methodOverride = require("method-override"); // PARA USAR PUT Y DELETE
const session = require("express-session"); //SESSION (middleware a nivel de aplicacion(global))
const cookieParser = require("cookie-parser"); //COOKIES

const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");
const productsRouter = require("./routes/productsRouter");
const adminRouter = require("./routes/adminRouter")
const middlewareLogin = require("./middlewares/middlewareLogin");
const adminMiddleware = require("./middlewares/adminMiddleware");

let port = process.env.PORT || 3000;

app.use(session({secret:"La banda de Luxo", resave: true,
saveUninitialized: true})); 


app.use(express.urlencoded({extended: false}));
app.use(express.json());
// esto es para interpretar la info que viaja en los formularios vía POST
// cuando no encuentra el req.body == undefined es por el orden de estos middlewares
app.use(cookieParser());
app.use(middlewareLogin);
app.use(adminMiddleware);



app.use(methodOverride("_method")); 
// para put y delete en la action del form le ponemos action="RUTA?_method=put o delete"

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));  
// LE INDICAMOS QUE COMO MOTOR DE VISTA UTILIZAREMOS EJS

app.use(express.static(path.join(__dirname, '../public'))); 
// DISPONIBILIZAMOS LA CARPETA PUBLIC

app.use("/", indexRouter); // RECURSO INDEX
app.use("/user", userRouter); // RECURSO USER
app.use("/products", productsRouter); // RECURSO PRODUCTS
app.use("/admin", adminRouter); // mail: melii.aa@hotmail.com username: 123456789aaa

app.use(function(req,res){
    return res.status(404).render("not-found")    
 }) //ERROR 404

app.listen(port, function(){
    console.log(`El servidor está corriendo en el puerto ${port}`)
});  // ponemos el servidor a correr en el puerto 3000
