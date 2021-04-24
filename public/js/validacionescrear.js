let agregar2 = document.getElementById("agregar2");
console.log(agregar2)

agregar2.addEventListener("submit", function(e){
    let errores = [];
    let inputNombre = document.getElementById("nombre");
    let inputDescripcion = document.getElementById("descripcion");
    
    if(inputNombre.value == ""){
        errores.push("Debes ingresarle un nombre a tu producto")
    }  else if(inputNombre.value.length < 5){
        errores.push("El campo nombre debe contener al menos 5 caracteres");
     }

    if(inputDescripcion.value == ""){
        errores.push("Debes ingresar una descripción")
    }  else if(inputDescripcion.value.length < 20){
        errores.push("El campo descripción debe contener al menos 20 caracteres");
     }

     let inputImagen = document.getElementById("imagen");

     if (!(/\.(jpg|png|jpeg|gif)$/i).test(inputImagen.value)) {
        errores.push("El archivo a adjuntar no es una imagen válida");
    }

    let precio = document.getElementById("precio");
    if(precio.value == ""){
        errores.push("Debes ingresarle un precio a tu producto")
    }
    

    if(errores.length > 0){
        e.preventDefault();
    }
   
    let small = document.getElementById("errores");
        small.innerHTML = "";
    for (let i = 0; i  < errores.length; i++) {
        small.innerHTML += "<li>" + errores[i] + "</li>"
    }
    console.log(errores)
    


})