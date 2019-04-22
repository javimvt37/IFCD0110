// JavaScript Document

function cerrar(){
	document.getElementById("fondo").style.display="none";
	document.getElementById("contenedor").style.display="none";
}
function abrir(a){
	
	document.getElementById("fondo").style.display="block";
	document.getElementById("contenedor").style.display="inline-block";
	document.getElementById("fotos").src=a.src;
	document.getElementsByTagName("figcaption")[0].innerHTML=a.alt;
}



