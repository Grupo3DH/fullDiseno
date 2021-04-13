let agregar = document.getElementById('agregar');
agregar.addEventListener('click',function(){

    let urlArray =  window.location.href.split("/");
    let pepe = urlArray[urlArray.length - 1];
    let imagenProducto = document.getElementById("imagen").getAttribute("src");
    // console.log(imagenProducto.getAttribute("src"))
    let nombreProducto = document.getElementById('nombre').innerText;
    let precioProducto = document.getElementById('precio').innerText;
    let cantProducto = document.getElementById('count').value;

    let producto = {
        idProducto: pepe,
        imagenProducto,
        nombreProducto,
        precioProducto,
        cantProducto
    }

  

    if( localStorage.length == 0){
        let carrito = [];
        carrito.push(producto)  
        localStorage.setItem('carrito',JSON.stringify(carrito)) 
        
       
    } else {
        let carrito = JSON.parse(localStorage.carrito)
        let  arrayProductos = carrito.filter(function(producto){    //veo si existe en el localstorage un producto con el id igual al mismo que acabo de agregar 
           return producto.idProducto == pepe    //DEVUELVE UN booleano que me dice true si tiene ese id o false si no lo tiene
        })
        if(arrayProductos.length == 0){
            carrito.push(producto)  
            localStorage.setItem('carrito',JSON.stringify(carrito)) ;
        } else {
            arrayProductos[0].cantProducto = parseInt(arrayProductos[0].cantProducto) + 1;
            localStorage.setItem('carrito',JSON.stringify(carrito)); 
        }
        
        
    }    
        alert("Estas agregando" + nombreProducto + "al carrito")
})
