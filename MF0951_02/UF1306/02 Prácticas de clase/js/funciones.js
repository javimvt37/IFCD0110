// JavaScript Document

//VENTANA
function tamanoVentana(){
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

var x = document.getElementById("infoVentana");
x.innerHTML = "<h3>La ventana del navegador es de ancho: " + w + "px, y de alto: " + h + "px.</h3>";
}

//PANTALLA
function pantalla(){
	
document.getElementById("divBom").innerHTML="El ancho de la pantalla es: "+screen.width+". "+
	"El alto de la pantalla es: "+screen.height;
}

function pantallaDisponible(){
	document.getElementById("divBom").innerHTML="El ancho de la pantalla es: "+screen.availWidth+". "+
	"El alto de la pantalla es: "+screen.availHeight;
}

function pantallaProfundidad(){
	document.getElementById("divBom").innerHTML="La profundidad del color de la pantalla es: "+screen.colorDepth+". "+
	"La profundidad de píxeles de la pantalla es: "+screen.pixelDepth;
}

//Informacion de la página web
function urlPagina(){
	document.getElementById("infoPantalla").innerHTML="La localización de la página es: "+window.location.href;
}

function dominioPagina(){
	document.getElementById("infoPantalla").innerHTML="El dominio de la página es: "+window.location.hostname;
}

function rutaPagina(){
	document.getElementById("infoPantalla").innerHTML="La ruta de la página es: "+window.location.pathname;
}

function protocoloPagina(){
	document.getElementById("infoPantalla").innerHTML="El protocolo de la página es: "+window.location.protocol;
}

function asignacionPagina(){
	document.getElementById("infoPantalla").innerHTML=window.location.assign("https://www.wikipedia.org");
}

function puertoPagina(){
	document.getElementById("infoPantalla").innerHTML="El número de puerto es: "+window.location.port;
}

//historial
function irAtras(){
	window.history.back()
}

function irAdelante(){
	window.history.forward()
}

function irHacia(){
	window.history.go(-2)
}

//cajas emergentes
function alerta(){
	window.alert("Mensaje de alerta");
}

function confirmar(){
	window.confirm("Mensaje de confirmación");
}

function introducir(){
	window.prompt("Mensaje para introducir un valor","Introduce tu nombre");
}

//Eventos de tiempo
function miFuncion(){
	alert("hola")
}

//
var myVarDos;
function intervalo(){
	myVarDos=setInterval(myTimer,5000);
function myTimer(){
	var d=new Date;
	alert(d.toLocaleTimeString());
}
	}

//Información navegador
function infoNavegador(){
	var motorNavegacion=navigator.appName;
	if(motorNavegacion==="Netscape"){motorNavegacion="JavaScript";}
	
//Nombre motor navegador
	var nombreNavegador, nave =navigator.userAgent;
	
	if(nave.indexOf("Firefox")>-1){
		nombreNavegador="Firefox";
		}else if((nave.indexOf("Opera")>-1)||(nave.indexOf("OPR")>-1)){
			nombreNavegador="Opera";
			}else if((nave.indexOf("Trident")>-1)||(nave.indexOf("MSIE")>-1)){
			nombreNavegador="I.Explorer";
			}else if(nave.indexOf("Edge")>1){
				nombreNavegador="Edge";
			}else if(nave.indexOf("Chrome")>1){
				nombreNavegador="Chrome";
			}else if(nave.indexOf("Safari")>1){
				nombreNavegador="Safari";
			}else{
				nombreNavegador="Desconocido";
			}
	
//Version de navegador
	var versionNav, agenteUsu=navigator.userAgent;
	if(agenteUsu.indexOf("Firefox")>-1){
		var indice1=agenteUsu.lastIndexOf("Firefox/");
		var version=agenteUsu.substr(indice1,12);
		var localizar=version.search("/");
		versionNav=version.slice(localizar+1,12);
		}else if((agenteUsu.indexOf("Opera")>-1)||(agenteUsu.indexOf("OPR")>-1)){
			var indice1=agenteUsu.lastIndexOf("OPR/");
			var version=agenteUsu.substr(indice1,15);
			var localizar=version.search("/");
			versionNav=version.slice(localizar+1,8);
			}else if((agenteUsu.indexOf("Trident")>-1)||(agenteUsu.indexOf("MSIE")>-1)){
			var indice1=agenteUsu.lastIndexOf("Trident/");
			var version=agenteUsu.substr(indice1,13);
			var localizar=version.search("/");
			versionNav=version.slice(localizar+1,11);
			}else if(agenteUsu.indexOf("Edge")>1){
			var indice1=agenteUsu.lastIndexOf("Edge/");
			var version=agenteUsu.substr(indice1,10);
			var localizar=version.search("/");
			versionNav=version.slice(localizar+1,10);
			}else if(agenteUsu.indexOf("Chrome")>1){
			var indice1=agenteUsu.lastIndexOf("Chrome/");
			var version=agenteUsu.substr(indice1,20);
			var localizar=version.search("/");
			versionNav=version.slice(localizar+1,11);
			}else if(agenteUsu.indexOf("Safari")>1){
			var indice1=agenteUsu.lastIndexOf("Safari/");
			var version=agenteUsu.substr(indice1,13);
			var localizar=version.search("/");
			versionNav=version.slice(localizar+1,13);
			}else{
				nombreNavegador="Desconocido";
			}

//Propietario navegador
	var propietario, propietarioNav = navigator.userAgent;
	
	if(propietarioNav.indexOf("Firefox")>-1){
		propietario="Fundación Mozilla";
		}else if((propietarioNav.indexOf("Opera")>-1)||(propietarioNav.indexOf("OPR")>-1)){
			propietario="Opera Software";
			}else if((propietarioNav.indexOf("Trident")>-1)||(propietarioNav.indexOf("MSIE")>-1)){
			propietario="Microsoft Corporation";
			}else if(propietarioNav.indexOf("Edge")>1){
				propietario="Microsoft Corporation";
			}else if(propietarioNav.indexOf("Chrome")>1){
				propietario="Google, Inc.";
			}else if(propietarioNav.indexOf("Safari")>1){
				propietario="Apple Computer, Inc.";
			}else{
				propietario="Desconocido";
			}
	
//lenguaje
	var lenguaje=window.navigator.language;
	
//sistema operativo
	var so="";
	var aus=window.navigator.userAgent;
	if(aus.indexOf("(Windows)")){
		var so="Windows";
	}else if(aus.indexOf("(Apple)")){
		var so="Apple";
	}else if(aus.indexOf("(Linux)")){
		var so="Linux";
	}else if(aus.indexOf("(iPhone)")){
		var so="iPhone";
	}else if(aus.indexOf("(iPod)")){
		var so="iPod";
	}else if(aus.indexOf("(iPad)")){
		var so="iPad";
	}else if(aus.indexOf("(Android)")){
		var so="Android";
	}else{
		var so="Indefinido";
	}
	
//plataforma
	var plataforma=window.navigator.platform;
	var plataformaDos=window.navigator.userAgent;
	
	if((plataformaDos.indexOf("Chrome")>-1)||(plataformaDos.indexOf("Edge")>-1)||(plataformaDos.indexOf("OPR")>-1)||(plataformaDos.indexOf("Firefox")>-1)){
		var indice=plataformaDos.lastIndexOf("Win64");
		var plataforma=plataformaDos.substr(indice,5);
	}
	
	//otros distintos
	else if((plataformaDos.indexOf("Safari")>-1)||(plataformaDos.indexOf("Trident")>-1)||(plataformaDos.indexOf("MSIE")>-1)){
		var indiceDos=plataformaDos.lastIndexOf("WOW64");
		var plataforma="Win64";
	}

//Navegador online?
	var navOnline=window.navigator.onLine;
	if(navOnline==true){var navOnline="Sí";}else if(navOnline==false){var navOnline="No";}else if(navOnline=undefined){var navOnline="Indefinido";}else if(navOnline===""){var naOnline="Desconocido";}
	
//Java activo
	var javaActivo=window.navigator.javaEnabled();
	if(javaActivo==true){var javaActivo="Sí";}else if(javaActivo==false){var javaActivo="No";}else if(javaActivo=undefined){var javaActivo="Indefinido";}else if(javaActivo===""){var javaActivo="Desconocido";}
	
//Cookies activas
	var cookiesActivas=window.navigator.cookieEnabled;
	if(cookiesActivas==true){var cookiesActivas="Sí";}else if(cookiesActivas==false){var cookiesActivas="No";}else if(cookiesActivas=undefined){var cookiesActivas="Indefinido";}else if(cookiesActivas===""){var cookiesActivas="Desconocido";}
	
//Plugins Activos
	var pluginsActivos=window.navigator.plugins.length;
	
//Agente usuario
	var agenteUsuario=window.navigator.userAgent;
	
//Mostrar info navegador
	var txt="";
	txt+="<h3>Información Navegador</h3>";
	txt+="<p><b>Motor Navegador: </b>"+motorNavegacion+"</p>";
	txt+="<p><b>Nombre Navegador: </b>"+nombreNavegador+"</p>";
	txt+="<p><b>Versión del Navegador: </b>"+versionNav+"</p>";
	txt+="<p><b>Propietario: </b>"+propietario+"</p>";
	txt+="<p><b>Lenguaje: </b>"+lenguaje+"</p>";
	txt+="<p><b>Sistema Operativo: </b>"+so+"</p>";
	txt+="<p><b>Plataforma: </b>"+plataforma+"</p>";
	txt+="<p><b>Navegador Online: </b>"+navOnline+"</p>";
	txt+="<p><b>Java Activo: </b>"+javaActivo+"</p>";
	txt+="<p><b>Cookies Activas: </b>"+cookiesActivas+"</p>";
	txt+="<p><b>Plugins Activos (Nº plugins): </b>"+pluginsActivos+"</p>";
	txt+="<p><b>Cabecera de Agente Usuario: </b>"+agenteUsuario+"</p>";
	
	document.getElementById("infoNav").innerHTML=txt;
}

//localizacion


function localizacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
     document.getElementById("infoLocalizacion").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
   document.getElementById("infoLocalizacion").innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

//COOKIES

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
	document.getElementById("galleta").innerHTML="<br>Usuario: "+user;
}
var h=document.cookie;
alert(h);
