const express = require("express");
const app = express();
const path = require("path");

const methodOverride = require("method-override"); // PARA USAR PUT Y DELETE
const session = require("express-session"); //SESSION (middleware a nivel de aplicacion(global))
const cookieParser = require("cookie-parser"); //COOKIES
const cors = require("cors");

const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");
const productsRouter = require("./routes/productsRouter");
const adminRouter = require("./routes/adminRouter")
const middlewareLogin = require("./middlewares/middlewareLogin");
const apiUserRouter = require("./routes/api/users");
const apiProductsRouter = require("./routes/api/products");

let port = process.env.PORT || 3000;

app.use(session({secret:"La banda de Luxo", resave: true,
saveUninitialized: true})); // para utilizar session
app.use(express.urlencoded({extended: false}));
app.use(express.json()); // esto es para interpretar la info que viaja en los formularios vía POST - 
// cuando no encuentra el req.body == undefined es por el orden de estos middlewares
app.use(cookieParser());
app.use(middlewareLogin);
app.use(methodOverride("_method")); // para put y delete en la action del form le ponemos action="RUTA?_method=put o delete"

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));  
// LE INDICAMOS QUE COMO MOTOR DE VISTA UTILIZAREMOS EJS

app.use(express.static(path.join(__dirname, '../public'))); 
// DISPONIBILIZAMOS LA CARPETA PUBLIC

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use("/", indexRouter); // RECURSO INDEX
app.use("/user", userRouter); // RECURSO USER
app.use("/products", productsRouter); // RECURSO PRODUCTS
app.use("/admin", adminRouter); // ADMINISTRADOR: mail: melii.aa@hotmail.com username: 123456789aaa
app.use("/api/users", apiUserRouter);
app.use("/api/products", apiProductsRouter);

app.use(function(req,res){
    return res.status(404).render("not-found")    
 }) 

app.listen(port, function(){
    console.log(`El servidor está corriendo en el puerto ${port}`)
});  
