const RutaApi = "https://snp0h1z7-4000.brs.devtunnels.ms"

//Método POST
function post() {
    let Nombre = document.getElementById("Nombre").value;
    let Apellido = document.getElementById("Apellido").value;
    let Num_Documento = document.getElementById("Num-doc").value;
    let Sexo = document.getElementById("Sexo").value;
    let Fecha_de_nacimiento = document.getElementById("Fecha_nacimiento").value;
    let Lugar_nacimiento = document.getElementById("Lugar_nacimiento").value;
    let Direccion = document.getElementById("Direccion").value;
    let Localidad = document.getElementById("Localidad").value;
    let Nombre_apellido_Padre = document.getElementById("Nombre_padre").value;
    let Ocupacion = document.getElementById("Ocupacion").value;
    let Telefono = document.getElementById("Telefono").value;
    let Email = document.getElementById("Email").value;

    const data = JSON.stringify({
      Nombre,
      Apellido,
      Num_Documento,
      Sexo,
      Fecha_de_nacimiento,
      Lugar_nacimiento,
      Direccion,
      Localidad,
      Nombre_apellido_Padre,
      Ocupacion,
      Telefono,
      Email
   });
  
     const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data,
        redirect: "follow"
     };

    fetch(`${RutaApi}/alumnos`, requestOptions)
      .then((response) => response.json())
      .then((json) => {
          console.log(json);
          console.log(json.status);  

        if (json.status === 201) {
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
  fetch(`${RutaApi}/alumnos`, requestOptions)
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