// JavaScript Document
var indiceDiapostiva=1;
mostrarDiapositiva(indiceDiapostiva);

//controles anterior y posterior
function pasarDiapositiva(n){
	mostrarDiapositiva(indiceDiapostiva+=n);
}

function elegirDiapositiva(n){
	mostrarDiapositiva(indiceDiapostiva=n);
}

function mostrarDiapositiva(n){
	var i;
	var misDiapositivas=document.getElementsByClassName("diapositiva");
	var puntos=document.getElementsByClassName("punto");
	if(n>misDiapositivas.length){
		indiceDiapostiva=1;
		}
	if(n<1){
		indiceDiapostiva=misDiapositivas.length;
	}
	for(i=0;i<misDiapositivas.length;i++){
		misDiapositivas[i].style.display="none";
	}
	for(i=0; i<puntos.length;i++){
		puntos[i].className=puntos[i].className.replace("active","");
	}
	misDiapositivas[indiceDiapostiva-1].style.display="block";
	puntos[indiceDiapostiva-1].className+="active"; 
}