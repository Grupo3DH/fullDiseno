let agregar = document.getElementById('agregar');
agregar.addEventListener('click',function(){

    console.log("estoy apretando")

    let imagenProducto = document.getElementById("imagen");
    let nombreProducto = document.getElementById('nombre').innerText;
    let precioProducto = document.getElementById('precio').innerText;
    let cantProducto = document.getElementById('count').value;

    let producto = {
        imagenProducto,
        nombreProducto,
        precioProducto,
        cantProducto
    }

    if( localStorage.length == 0){
        let carrito = []
        carrito.push(producto)  
        localStorage.setItem('carrito',JSON.stringify(carrito)) 
        console.log(carrito)
    } else {
        let carrito = JSON.parse(localStorage.carrito)
        carrito.push(producto)  
        localStorage.setItem('carrito',JSON.stringify(carrito)) 
        console.log(carrito)
    }    
 alert(nombreProducto+' agregado al carrito')
})
