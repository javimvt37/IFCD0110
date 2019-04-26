// JavaScript Document
var indiceDiapostiva=1;
mostrarDiapositiva();


function mostrarDiapositiva(){
	var i;
	var misDiapositivas=document.getElementsByClassName("diapositiva");
	
	for(i=0;i<misDiapositivas.length;i++){
		misDiapositivas[i].style.display="none";
	}
	indiceDiapostiva++;
	if(indiceDiapostiva>misDiapositivas.length){
		indiceDiapostiva=1;
	}
	misDiapositivas[indiceDiapostiva-1].style.display="block";
	setTimeout(mostrarDiapositiva,2000); 
}