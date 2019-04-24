// JavaScript Document
/*var c=document.getElementById("b");
var a=document.getElementById("fondo");
b.onclick=function(){
	a.style.display="block";
}*/


function abrir(){
	
	document.getElementById("fondo").style.display="block";
	document.getElementById("contenedor").style.display="block";
	document.getElementById("fondo").style.width="100%"
}
function cerrar(){
	document.getElementById("fondo").style.display="none";
	document.getElementById("contenedor").style.display="none";
}
var contrasena;
function logueado(){
	var usuario1 = {user:"juan", password:"1234", pin: 147}; 
	var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
	var usuario3 = {user:"jose", password:"1324", pin: 369}; 
	contrasena=document.getElementById("pass").value;
	var usuario=document.getElementById("user").value;
	
	
	if((usuario1.user==usuario&&usuario1.password==contrasena)||(usuario2.user==usuario&&usuario2.password==contrasena)||(usuario3.user==usuario&&usuario3.password==contrasena)){
	
	alert("Bienvenido "+usuario+" tipo contraseña "+typeof(contrasena));
	document.getElementById("b").innerHTML='<style="color:red">Usuario '+usuario+'</style>';
		
	document.getElementById("fondo").style.display="none";
	document.getElementById("contenedor").style.display="none";
		
		if(document.getElementById("recordar").checked==true){
		document.cookie="usuario="+'"'+document.getElementById("user").value+'"';
	alert(document.cookie);
	}
		
		}else{
			document.getElementById("demo").innerHTML="Contraseña ó usuario incorrecto";
		}
	
	if((usuario=="")||(usuario==" ")||(contrasena=="")||(contrasena==" ")){
		document.getElementById("demo").innerHTML="Usuario y contraseña obligatorios";
	}
	if(contrasena.length!=4){
		alert("La contraseña ó el usuario ha de contener más o menos caracteres");
	}else if(isNaN(contrasena)==true){
		alert("Contraseña incorrecta")
	}
}
function ver(){
		var contras=document.getElementById("pass");
	var cambiar=document.getElementById("boton_chequeo");
	if(cambiar.checked==true){
		contras.type="text";
		console.log("marcado");
		}else{
			contras.type="password";
			console.log("no marcado");
		}
}


function recordar(){
		

		if(document.getElementById("divvpin").style.display=="none"){
			document.getElementById("divvpin").style.display="block";
			}else{
				document.getElementById("divvpin").style.display="none";
			}
}
function validarContrasena(){
	contrasena=document.getElementById("pass").value;
	
	
}
function validarpin(){
		var usuario1 = {user:"juan", password:"1234", pin: 147}; 
	var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
	var usuario3 = {user:"jose", password:"1324", pin: 369};
	var usuario=document.getElementById("user").value;
var pin=document.getElementById("pin").value;
	
if(usuario1.user==usuario&&pin==usuario1.pin){
	document.getElementById("pass").placeholder=usuario1.password;
}else if(usuario2.user==usuario&&pin==usuario2.pin){
	document.getElementById("pass").placeholder=usuario2.password;
}else if(usuario3.user==usuario&&usuario3.pin==pin){
	document.getElementById("pass").placeholder=usuario3.password;
}
	}


