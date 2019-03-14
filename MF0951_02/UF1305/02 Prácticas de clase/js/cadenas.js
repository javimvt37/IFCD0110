// JavaScript Document

//metodo length
function longitud(){
	var mensajeLongitud=prompt("Introduce cualquier número de caracteres");
	alert("El número de caracteres introducido son: "+mensajeLongitud.length);
}
//metodo indexof()
function posicion(){
	var mensajePosicion=prompt("Introduce una frase");
	var frase=mensajePosicion;
	var mensajePosicionDos=prompt("Introduce la palabra de tu frase "+frase);
	var palabra=mensajePosicionDos;
	var posic=frase.indexOf(palabra)+1;
	alert("La palabra "+palabra+" esta en la posición "+posic+" del texto "+frase);
}
//metodo lastIndexOf()
function encontrar(){
	var mensaje=prompt("Introduce una frase");
	var frase=mensaje;
	var mensajeDos=prompt("Introduce una palabra del texto escrito y te indico su ultima posición");
	var palabra=mensajeDos;
	var posic=frase.lastIndexOf(palabra)+1;
	alert("La palabra "+palabra+" su última posición es "+posic+" del texto "+'"'+frase+'"');
}

//metodo charAt()
function caracter(){
	var mensajeCaracter=prompt("Introduce una palabra");
	var palabraChat=mensajeCaracter;
	longitudChat=palabraChat.length;
	var mensajeCaracterDos=prompt("Introduce una posicion de 1 a "+longitudChat);
	var posicion=mensajeCaracterDos;
	
	
	alert("la posición "+posicion+" corresponde al caracter "+palabraChat.charAt(posicion-1));
}

//charCodeAt()
function caracterunicode(){
	var mensaje=prompt("Hola, introduce la posicion de un caracter de este texo y saldra el codigo unicode de ese caracter");
	var posicion=mensaje-1;
	alert("Hola, introduce la posicion de un caracter de este texo y saldra el codigo unicode de ese caracter".charCodeAt(posicion));
}

//fromCharCode()
function caracterunicodefrom(){

	var mensaje=prompt("Introduce un valor unicode del 32 al 126 y muestro a que caracter corresponde");
	var valor=mensaje;
	//para convertir un texto en un número
	var entero= parseInt(valor);
	//para comprobar de que tiop es la variable
	var tipo=typeof(entero);
	alert("El valor unicode "+mensaje+" que es de tipo "+tipo+ " corresponde al carácter: "+String.fromCharCode(valor));
}
//toUpperCase()
function mayusculas(){
	var mensaje=prompt("Introduce un texto en minusculas y lo conviero en mayusculas");
	var mayusculas=mensaje.toUpperCase();
	alert(mayusculas);
}
//toLowerCase()
function minusculas(){
	var mensaje=prompt("Introduce un texto en mayusculas y lo convierto en minusculas");
	var minusculas=mensaje.toLowerCase();
	alert(minusculas);
}
//concat()
function concatenar(){
	var mensaje=prompt("Introduce una palabra");
	var palabra=mensaje;
	var mensajeDos=prompt("Introduce una segunda palabra y te la concateno");
	var palabraDos=mensajeDos;
	alert(palabra.concat(" ",palabraDos));
}
//endsWith()
function comprobarFinal(){
	var mensaje=prompt("Introduce un texto");
	var texto=mensaje;
	var mensajeDos=prompt("Comprueba si el texto acaba con la palabra o caracter que quieras");
	var comprobar=mensajeDos;
	if (mensaje.endsWith(comprobar)==true){alert("El texto si finaliza con "+comprobar);
										  }else {alert("el texto no finaliza con "+comprobar)};
}
//includes()
function incluido(){
	var texto="Introduce una palabra o caracter para comprobar si esta incluido en este texto";
	var mensaje=prompt(texto);
	var palabra=mensaje;
	var inclui=texto.includes(palabra);
	if (inclui==true){alert("La palabra o caracter "+palabra+ " si esta incluida en el texto")
					 }else{alert("La palabra o caracter "+palabra+" no esta incluida")};
}
//Método match()
function compro(){
	var frase= prompt("Por favor introduce tú numero de telefono");
	var indice=frase.match(/[0-9]/g);//[A-Za-z-z0-9]
	alert("El número de teléfono "+"\""+ frase +"\"\n"
		  +"Contiene estos números: "+"\""+indice+"\""
		  +"n"+"Compruebalo"+"\n\""+frase+"\"");
	
}
//Método repeat()
function repetir(){
	var mensaje=prompt("Introduce un texto y te lo repito tres veces");
	alert(mensaje.repeat(3));
}
//Metodo replace()
function replace( ){
	var mensaje=prompt("Tu color favorito es el rojo");
	
}