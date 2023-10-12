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