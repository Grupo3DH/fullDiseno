window.addEventListener("load", function () {

  var search = document.querySelector(".icono-search");
  var input = document.querySelector(".button-search input");
  var formSearch = document.querySelector(".formSearch")

  search.addEventListener("click", function (e) {
    e.preventDefault();
    input.style.display = "block"

  })

  input.addEventListener("focus", function () {
    if (this.value == 'Buscar...') { this.value = "" }
  })


  // function buscar(){
  //   if (input.value=="") {
  //       alert("Que producto quiere buscar?");
  //   }
  //   else{
  //       formSearch.submit(); 
  //   }

  // }

  //SLIDES

  var slideIndex = 0;
  var slides = document.querySelectorAll(".promo");
  var intervaloslide = setInterval(showSlides, 3000);
  function showSlides() {
    var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.add("ocultar");
      slides[i].classList.add("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    // for (i = 0; i < slides.length; i++) {
    //   slides[i].className.replace(" active");
    // }
    slides[slideIndex - 1].classList.remove("ocultar");
    slides[slideIndex - 1].className += " active";

  }

//NEWSLWTTER
  var newsletter = document.querySelector(".newsletterInput");

  console.log(newsletter)
  newsletter.addEventListener("focus", function () {
    if (this.value == 'NEWSLETTER') { this.value = "" };
    newsletter.style.letterSpacing = "inherit"

  })
})











  // let inputSearch = document.getElementById("search");

  //     inputSearch.addEventListener("submit",funtion(){
  //       if(inputSearch.value != ""){
  //       var form-search = document.querySelector(".formSearch")
  //         form-search.submit()
  //       }
  //       })
  // 