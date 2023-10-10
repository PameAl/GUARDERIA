const modal_containers = document.querySelectorAll('.modal-container');
const open = document.getElementById('open');
const open1 = document.getElementById('open1');
const open2 = document.getElementById('open2');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_containers[0].classList.add('show'); // Abre la primera ventana emergente
});

open1.addEventListener('click', () => {
  modal_containers[0].classList.remove('show'); // Cierra la primera ventana emergente
  modal_containers[1].classList.add('show'); // Abre la segunda ventana emergente
});

open2.addEventListener('click', () => {
  modal_containers[1].classList.remove('show'); // Cierra la segunda ventana emergente
  modal_containers[2].classList.add('show'); // Abre la tercera ventana emergente
});

close.addEventListener('click', () => {
  modal_containers.forEach((container) => {
    container.classList.remove('show'); // Cierra todas las ventanas emergentes
  });
});


//funcion para cargar almanaque
 $(function() {
    $("#fecha_nacimiento").datepicker();
});
