//codigo para carrusel que nunca anduvo
//var slideIndex = 1;
//showSlides(slideIndex);

//function plusSlides(n) {
  //showSlides(slideIndex += n);
//}

//function currentSlide(n) {
  //showSlides(slideIndex = n);
//}

//function showSlides(n) {
  //var i;
  //var slides = document.getElementsByClassName("mySlides");
  //if (n > slides.length) {slideIndex = 1}    
  //if (n < 1) {slideIndex = slides.length}
  //for (i = 0; i < slides.length; i++) {
      //slides[i].style.display = "none";  
  //}
  //slides[slideIndex-1].style.display = "block";  
//}


//Envio de datos de formulario a email
const $form = document.querySelector("#form");
const $buttonMailto = document.querySelector("#form");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "aplication/json",
    },
  });
  if (response.ok) {
    this.reset();
    alert("Gracias por contactarme, te responderé pronto");
  }
}

//menu pegajoso
//$(document).ready(funcion(){
 //var altura = $('.navegacion-principal').offsel().top,
 //alert(altura)
//});