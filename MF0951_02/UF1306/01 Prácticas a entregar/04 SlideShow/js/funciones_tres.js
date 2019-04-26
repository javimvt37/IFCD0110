// JavaScript Document
var claseAcordeon=document.getElementsByClassName("acordeon");
var i;

for(i=0;i<claseAcordeon.length;i++){
	claseAcordeon[i].addEventListener("click",function deplegar(){
		
		/* Alternar entre agregar y eliminar la clase "activa", para resaltar el botón que controla el panel */
		this.classList.toggle("active");
		
		
/* Alterna entre ocultar y mostrar el panel activo */
		var panel = this.nextElementSibling;
		/*alert(this.classList);*/
		if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    
	});
}