/*// JavaScript Document
seleccionFiltro("todo")

function seleccionFiltro(c){
	var colu,i;
	colu=document.getElementsByClassName("columna");
	
	if(c=="todo") c="";
	for(i=0;i<colu.length:i++){
		removerClase(colu[i],"mostrar");
		if(colu[i].className.indexOf(c)>-1) anadirClase(colu[i],"mostrar");
	}
}

function anadirClase(elemento,nombre){
	var i, arr1, arr2;
	arr1=elemento.className.split(" ");
	arr2=nombre.split(" ");
	for (i = 0; i < arr2.length; i++) {
    
      if (arr1.indexOf(arr2[i]) == -1) {
		  elemento.className += " " + arr2[i];
	  }
   
  }
}

function removerClase(elemento,nombre){
	 var i, arr1, arr2;
  arr1 = elemento.className.split(" ");
  arr2 = nombre.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  elemento.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
var contenedorBoton = document.getElementById("botonera");
var btns = contenedorBoton.getElementsByClassName("boton");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


<div id="botonera">
  <button class="boton active" onclick="seleccionFiltro('todo')"> Show all</button>
  <button class="boton" onclick="seleccionFiltro('oceanos')"> Oceanos</button>
  <button class="boton" onclick="seleccionFiltro('cascadas')"> Cascadas</button>
  <button class="boton" onclick="seleccionFiltro('montanas')"> Montañas</button>
</div>

  <!-- Images (Portfolio) -->
  
  <div class="fila">
  
  <div class="columna oceanos">
  <div class="contenido">
  <img src="img/ocean.jpg" alt="Ocean" class="w3-image" width="1000" height="500">
  <h4>Oceanos</h4>
  <p>Lorem ipsum </p>
  </div>
  </div>
  
  <div class="columna oceanos">
  <div class="contenido">
  <img src="img/ocean2.jpg" alt="Ocean II" class="w3-image w3-margin-top" width="1000" height="500">
  <h4>Oceanos</h4>
  <p>Lorem ipsum </p>
  </div>
  </div>
  
    <div class="columna Cascadas">
  <div class="contenido">
  <img src="img/falls2.jpg" alt="Falls" class="w3-image w3-margin-top" width="1000" height="500">
  <h4>Cascada</h4>
  <p>Lorem ipsum </p>
  </div>
  </div>
  
   <div class="columna montanas">
  <div class="contenido">
  <img src="img/mountainskies.jpg" alt="Skies" class="w3-image w3-margin-top" width="1000" height="500">
  <h4>Montaña</h4>
  <p>Lorem ipsum </p>
  </div>
  </div>
  
   <div class="columna montanas">
  <div class="contenido">
  <img src="img/mountains2.jpg" alt="Mountains" class="w3-image w3-margin-top" width="1000" height="500">
  <h4>Montaña</h4>
  <p>Lorem ipsum </p>
  </div>
  </div>
  
  </div>
	</div>
<br>*/
seleccionFiltro("all")
function seleccionFiltro(c) {
  var x, i;
  x = document.getElementsByClassName("columna");
  if (c == "all") {c = "";}
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}