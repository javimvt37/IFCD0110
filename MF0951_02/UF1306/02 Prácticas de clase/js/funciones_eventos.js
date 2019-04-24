// JavaScript Document
function eventoonclick(){
	var source = document.getElementById("img1").src;
	//alert(typeof(source) + source);
	var encontrar = source.lastIndexOf("img/pic_bulboff.gif");
	//alert(encontrar);
	if(encontrar != -1){
	document.getElementById("img1").src="img/pic_bulbon.gif";
	} else {
		document.getElementById("img1").src="img/pic_bulboff.gif";
	}
}

function eventoondblclick(){
	var source=document.getElementById("img2").src;
	var encontrar=source.search("img/pic_bulboff.gif");
	
	if(encontrar!=-1){
	document.getElementById("img2").src="img/pic_bulbon.gif";
	}else{
		document.getElementById("img2").src="img/pic_bulboff.gif";
	}
}
function eventooncontextmenu(){
	var source=document.getElementById("img3").src;
	var encontrar=source.search("img/pic_bulboff.gif");
	
	if(encontrar!=-1){
	document.getElementById("img3").src="img/pic_bulbon.gif";
	}else{
		document.getElementById("img3").src="img/pic_bulboff.gif";
	}
}

function eventoonmousedown(){
	
	var source=document.getElementById("img4").src;
	var encontrar=source.search("img/pic_bulboff.gif");
	
	if(encontrar!=-1){
	document.getElementById("img4").src="img/pic_bulbon.gif";
	}else{
		document.getElementById("img4").src="img/pic_bulboff.gif";
	}
}
function eventoonmouseenter(){
	var source=document.getElementById("img5").src;
	var encontrar=source.search("img/pic_bulboff.gif");
	
	if(encontrar!=-1){
	document.getElementById("img5").src="img/pic_bulbon.gif";
	}else{
		document.getElementById("img5").src="img/pic_bulboff.gif";
	}
}

function eventoonmouseleave(){
	var source=document.getElementById("img6").src;
	var encontrar=source.search("img/pic_bulboff.gif");
	
	if(encontrar!=-1){
	document.getElementById("img6").src="img/pic_bulbon.gif";
	}else{
		document.getElementById("img6").src="img/pic_bulboff.gif";
	}
}

function eventoonmousemove(){
	var source=document.getElementById("img7").src;
	var encontrar=source.search("img/pic_bulboff.gif");
	
	if(encontrar!=-1){
	document.getElementById("img7").src="img/pic_bulbon.gif";
	}else{
		document.getElementById("img7").src="img/pic_bulboff.gif";
	}
}

function eventoonmouseout(){
	var source=document.getElementById("img8").src;
	var encontrar=source.search("img/pic_bulboff.gif");
	
	if(encontrar!=-1){
	document.getElementById("img8").src="img/pic_bulbon.gif";
	}else{
		document.getElementById("img8").src="img/pic_bulboff.gif";
	}
}
function eventoonmouseover(){
	var source=document.getElementById("img9").src;
	var encontrar=source.search("img/pic_bulboff.gif");
	
	if(encontrar!=-1){
	document.getElementById("img9").src="img/pic_bulbon.gif";
	}else{
		document.getElementById("img9").src="img/pic_bulboff.gif";
	}
}

function eventoonmouseup(){
	var source=document.getElementById("img10").src;
	var encontrar=source.search("img/pic_bulboff.gif");
	
	if(encontrar!=-1){
	document.getElementById("img10").src="img/pic_bulbon.gif";
	}else{
		document.getElementById("img10").src="img/pic_bulboff.gif";
	}
}

function apagartodas(){
	var bombillas=document.getElementsByClassName("imgBombilla");
	
	var texto="";
	for(i=0;i<bombillas.length;i++){
		bombillas[i].src="img/pic_bulboff.gif";
	}
}

/*fin de bombillas*/
function eventooncopy(){
	document.getElementById("demo1").innerHTML="Has copiado el texto"
}

function eventooncut(){
	document.getElementById("demo2").innerHTML="Has cortado el texto"
}

function eventoonpaste(){
	document.getElementById("demo3").innerHTML="Has pegado el texto";
}
function eventoonkeydown(){
	document.getElementById("demo4").innerHTML="Has presionado alguna tecla";
}
function eventoonkeypress(){
	document.getElementById("demo5").innerHTML="Has presionado alguna tecla";
}
function eventoonkeyup(){
	document.getElementById("demo6").innerHTML="Has presionado y soltado alguna tecla";
}





