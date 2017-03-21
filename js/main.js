var iniciaSesion = "";
var email = "";
var password = "";
var check = "";
var btn = "";
function traducir() {
 iniciaSesion = document.getElementById("form-signin-heading")
  email = document.getElementById("inputEmail");
  password = document.getElementById("inputPassword");
  check = document.getElementsByTagName("span")[0];
  btn = document.getElementsByClassName("btn")[0];

  iniciaSesion.innerHTML = "Inicia sesión por favor";
  email.placeholder = "Ingresa tu correo";
  password.placeholder = "Contraseña";
  check.innerHTML= "Recordar datos";
  btn.innerHTML= "Iniciar Sesión";
  console.log(email.value);
  console.log(password.value);
  datosUsuario();
}
 // traducir();

function datosUsuario() {
  document.getElementById("titulo").innerHTML = "Datos del formulario";
  document.getElementById("datos").innerHTML = "El correo electrónico ingresado es : "+ email.value + "</br>"+"La clave ingresada es: "+password.value;
}
