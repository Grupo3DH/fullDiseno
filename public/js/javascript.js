window.addEventListener("load", function(){

    var search = document.querySelector(".icono-search");
    var button =  document.querySelector(".button-search");


    search.addEventListener("click", function(e){
        e.preventDefault()
        button.style.display = "inherit"
    })


    var slideIndex = 0;
    var slides = document.querySelectorAll(".promo");
    var intervaloslide = setInterval(showSlides, 3000);
    function showSlides() {
      
      var i;
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
        slides[i].classList.add("active"); 
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1}    
      // for (i = 0; i < slides.length; i++) {
      //   slides[i].className.replace(" active");
      // }
      slides[slideIndex-1].style.display = "block";  
      slides[slideIndex-1].className += " active";
      
    }








  })

     
  
  
  
  
  
  
  // let inputSearch = document.getElementById("search");

      // inputSearch.addEventListener("submit",funtion(){
      //   if(inputSearch.value != ""){
      //   var form-search = document.querySelector(".formSearch")
      //     form-search.submit()
      //   }
      //   })
    
  
      // let newsletter = document.querySelector(".newsletterInput")
      // newsletter.addEventListener("submit",funtion(){
      //   newsletter.s
      // })




// window.addEventListener("load", function(){
//     let login = document.querySelector(".inicio")
//     login.addEventListener("click", function(){
//         window.alert("hola")
//     })
// })

// window.addEventListener("load", function(){
//     let productos = document.querySelector(".p")
//     productos.addEventListener("mouseover", function(){
//         style.color = "red"
//       })


// })
 

