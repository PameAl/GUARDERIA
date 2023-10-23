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
          alert("Se cargo el alumno!!");
        } else {
          alert("No se cargo el alumno!!");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

//Método GET
function getProductos() {

  const requestOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
    redirect: "follow",
};
  fetch("https://snp0h1z7-4000.brs.devtunnels.ms/alumnos", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      
      const tablaProductos = document.getElementById("tabla-alumnos");
      const tbody = tablaProductos.querySelector("tbody");

      // Limpia el contenido existente en la tabla
      tbody.innerHTML = "";

      data[0].forEach((alumno) => {
 
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${alumno.Id_Alumno}</td>
        <td>${alumno.Nombre}</td>
        <td>${alumno.Apellido}</td>
        <td>${alumno.Num_Documento}</td>
        <td>${alumno.Sexo}</td>
        <td>${alumno.Fecha_de_nacimiento}</td>
        <td>${alumno.Lugar_nacimiento}</td>
        <td>${alumno.Direccion}</td>
        <td>${alumno.Localidad}</td>
        <td>${alumno.Nombre_apellido_Padre}</td>
        <td>${alumno.Ocupacion}</td>
        <td>${alumno.Telefono}</td>
        <td>${alumno.Email}</td>
        `;
        console.log(alumno)
        tbody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error al obtener los alumnos:", error);
    });
}