var clases = document.getElementsByClassName("mensaje");//Se guarda en la variable clases el arreglo obtenido mediante .getElementsByClassName
var tam = clases.length;//Se obtiene el tamaño del arreglo(contiene el total de elementos que coinciden con la clase "mensaje")
console.log(tam);//Se verifica el tamaño del arreglo
// Condicionales para verificar en que caso cae la variable tam
if(tam == 1){//1ra condicion
  alert("Es muy poco"); // Si se cumple se muestra el mensaje "Es muy poco"
}
else if (tam >= 4) {//2da condicion
  alert("Son muchos!");//Si se cumple muestra el mensaje "Son muchos"
}
else{ //En cualquier otro caso
  alert("No está mal");//Muestra el mensaje "No está mal"
}
