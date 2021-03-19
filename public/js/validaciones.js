
let register = document.querySelector("form.register");
register.addEventListener("submit", function(e){
    let errors = [];

    let inputName = document.getElementById("inputName");
    
    let inputEmail = document.getElementById("inputEmail");
    console.log(inputEmail)
    let inputPassword = document.getElementById("inputPassword");
    let confirmaPassword = document.getElementById("confirmaPassword");
   

 if(inputName.value == ""){
     errors.push("El campo nombre se encuentra vacío");
 } else if(inputName.value.length < 2){
    errors.push("El campo nombre debe contener al menos 2 caracteres");
 }

 if(inputEmail.value == ""){
    errors.push("El campo email se encuentra vacío");
} 


 if(inputPassword.value == ""){
    errors.push("El campo password se encuentra vacío");
} else if(inputName.value.length < 8){
    errors.push("La contraseña debe contener al menos 8 caracteres");
 }

 if(confirmaPassword.value == ""){
    errors.push("Por favor confirma tu contraseña");
}

function validar_email(email) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email)
}

if(!validar_email(inputEmail.value))
{
    errors.push("El campo de email no es válido");
}

 if(errors.length > 0){
     e.preventDefault();
 }

 let small = document.querySelector("div.errors");
 for (let i = 0; i  < errors.length; i++) {
     small.innerHTML += "<li>" + errors[i] + "</li>"
 }





})

let login = document.querySelector("form.formularioIS");
login.addEventListener("submit", function(e){
    let errors = [];

    let inputEmail = document.getElementById("email");
    
    if(inputEmail.value == ""){
        errors.push("El campo email se encuentra vacío");
    } 

    if(errors.length > 0){
        e.preventDefault();
    }
   
    let small = document.querySelector("div.errors");
    for (let i = 0; i  < errors.length; i++) {
        small.innerHTML += "<li>" + errors[i] + "</li>"
    }



})