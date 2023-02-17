var imagenes = ["https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", 
"https://images.unsplash.com/photo-1675683157806-8a5bf1deb21e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", 
"https://images.unsplash.com/photo-1676551369859-b9bb2d5d39df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"];
var imagen = document.getElementById("imagen");
var boton = document.getElementById("boton");
var indice = 0;
boton.addEventListener("click", function() {
    indice++;
    if (indice >= imagenes.length) {
      indice = 0;
    }
    imagen.src = imagenes[indice];
  });