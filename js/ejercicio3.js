
function myFunction() {
var nombre = document.getElementById("name").value;//Se obtiene el valor del elemento con el id = name
var email = document.getElementById("email").value;//Se obtiene el valor del elemento con el id = email

document.getElementById("name").value = "";// Se limpia el contenido del elemento con el id = name
document.getElementById("email").value = "";// Se limpia el contenido del elemento con el id = email

document.getElementById("mostrarNombre").innerHTML = nombre; // Se escribe en el elemento con el id = mostrarNombre el valor de la variable nombre
document.getElementById("mostrarMail").innerHTML = email; // Se escribe en el elemento con el id = mostrarMail el valor de la variable email
}
