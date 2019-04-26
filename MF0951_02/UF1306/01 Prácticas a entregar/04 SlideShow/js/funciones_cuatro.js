// JavaScript Document
function abrirfoto(evt,nombreFoto){
	var i,contenidoFicha, contenidoLinks;
	
	contenidoFicha=document.getElementsByClassName("contenidoFicha");
	for(i=0;i<contenidoFicha.length;i++){
		contenidoFicha[i].style.display="none";
	}
	contenidoLinks=document.getElementsByClassName("linksfichas");
	for(i=0;i<contenidoLinks.length;i++){
		contenidoLinks[i].className=contenidoLinks[i].className.replace("active","");
	}
	document.getElementById(nombreFoto).style.display="block";
	evt.currentTarget.className+="active";
}