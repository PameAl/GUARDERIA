//Método POST
function post() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let numdoc = document.getElementById("num-doc").value;
    let sexo = document.getElementById("sexo").value;
    let fechanacimiento = document.getElementById("fecha_nacimiento").value;
    let lugarnacimiento = document.getElementById("lugar_nacimiento").value;
    let direccion = document.getElementById("direccion").value;
    let localidad = document.getElementById("localidad").value;
    let nombrepadre = document.getElementById("nombre_padre").value;
    let ocupacion = document.getElementById("ocupacion").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("apellido", apellido);
    formData.append("num-doc", numdoc);
    formData.append("sexo", sexo);
    formData.append("fecha_nacimiento", fechanacimiento);
    formData.append("lugar_nacimiento", lugarnacimiento);
    formData.append("direccion", direccion);
    formData.append("localidad", localidad);
    formData.append("nombre_padre", nombrepadre);
    formData.append("ocupacion", ocupacion);
    formData.append("telefono", telefono);
    formData.append("email", email);

    fetch("https://snp0h1z7-3000.brs.devtunnels.ms/productos", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((json) => {
          console.log(json);
          console.log(json.status);  

        if (json.status == 201) {
          alert("Se cargo el producto!!");
        } else {
          alert("No se cargo el producto!!");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
//Método GET
function getProductos() {
// var requestOptions = {
//   method: "GET",
//   redirect: "follow",

// };
const requestOptions = {
  method: "GET",
  headers: {
      "Content-Type": "application/json"
  },
  redirect: "follow",
};
fetch("https://snp0h1z7-3000.brs.devtunnels.ms/productos", requestOptions)
  .then((response) => response.json())
  .then((data) => {
    const tablaProductos = document.getElementById("tabla-productos");
    const tbody = tablaProductos.querySelector("tbody");

    // Limpia el contenido existente en la tabla
    tbody.innerHTML = "";

    data.forEach((producto) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.descripcion}</td>
        <td>${producto.cantidad}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Error al obtener los productos:", error);
  });
}
