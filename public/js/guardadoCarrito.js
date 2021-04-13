window.addEventListener("load",(e)=>{ 
    if(typeof localStorage.carrito == "undefined" || typeof
    localStorage.carrito == "[]" ){
        let div = document.getElementById("guardadoCarrito")
        div.innerHTML += "<h2> no hay productos en tu carrito </h2>"
    } else {
        let carrito =  JSON.parse(localStorage.carrito)
        for(let i = 0; i < carrito.length; i++){
           let producto = carrito[i]
           let div = document.getElementById("guardadoCarrito")
           
           let contenido =  `
            <section class="tablaProductos">
            <div class="descProdCarrito articulo">
            <img src="${producto.imagenProducto}" alt="">
            <div class="nomColCarrito">
            <h3> ${producto.nombreProducto} </h3>
            <h3>Color: verde militar</h3>
            </div>
            </div>
            <div>
           <button onclick="contadormenos()">-</button>
           <input type="text" style="text-align: center; width: 30px;" value="1">
           <button onclick="contadormas()">+</button>
           </div>
           <h2 class="precio">$<%= array[i].precioProducto %>
           </h2>
           <i class="borrar fa fa-trash"></i></a>
           </section> `

    div.innerHTML += contenido;
        }
        

    }


    
   




});






















function deleteAll() {
localStorage.clear()
    location.reload()
    alert('Carrito vaciado')
}
function deleteItem(id) {
let carrito = JSON.parse(localStorage.carrito)
carrito = carrito.filter((producto, i) => {
 return i !== id;
});
localStorage.setItem('carrito', JSON.stringify(carrito));
console.log(carrito)
    location.reload();
     }