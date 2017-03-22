var enlaces = document.getElementsByTagName("a");//Variable que guarda el arreglo generado por .getElementsByTagName de las etiquetas <a>
var numEnlaces = enlaces.length; //Variable que obtiene el tamaño del arreglo (número de elementos <a>)
document.getElementById("num_enlaces").innerHTML = numEnlaces;// Se escribe en las etiqueta con el id = "num_enlaces" el número de elementos que hay en el arreglo.
