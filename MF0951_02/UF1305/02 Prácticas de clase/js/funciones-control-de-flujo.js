// JavaScript Document
//if
function horaIf(){
	var fecha=new Date();
	var hora=fecha.getHours();
	
	if(hora>=7 && hora<=12){
		alert("Buenos días");
		}
	
	if(hora>=13 && hora<=18){
		alert("Buenas tardes");
		
	}
	if(hora>=19 && hora<=23){
		alert("Buenas noches");
	}
	if(hora>=0 && hora<=6){
		alert("Es de madrugada");
	}
}
//else
function horaElse(){
	/*var fecha=new Date();
	var hora=fecha.getHours();
		if(hora>=00 && hora<=12){
		alert("Es antes de mediodía");
	}else{
		alert("Es pasado mediodía");
	}*/
	
	var edad=parseInt(prompt("Introduce tu edad"));
	if(edad>=18){
		alert("Eres mayor de edad");
	}else{
		alert("Eres menor de edad");
	}

}


//else if()
function horaElseIf(){
	var fecha=new Date();
	var hora=fecha.getHours();
	
	if(hora>=7 && hora<=12){
		alert("Buenos días");
		}else if(hora>=13 && hora<=18){
		alert("Buenas tardes");
		}else if(hora>=19 && hora<=23){
		alert("Buenas noches");
		}else if(hora>=0 && hora<=6){
		alert("Es de madrugada");}
}

//switch
function switchCase(){
	var fecha=new Date();
	var hora=fecha.getHours();
	var diaSemana=fecha.getDay();
	var mes=fecha.getMonth();
	
	var diaLetra;
	switch(diaSemana){
		case  0:
			diaLetra="Domingo";
			break;
		case 1:
			diaLetra="Lunes";
			break;
		case 2:
			diaLetra="Martes";
			break;
		case 3:
			diaLetra="Miercoles";
			break;
		case 4:
			diaLetra="Jueves";
			break;
		case 5:
			diaLetra="Viernes";
			break;
		case 6:
			diaLetra="Sabado";
			break;
			
	}
	
	switch(mes){
		case 1:
		case 2:
		case 3:
			mes="primer trimestre";
			break;
		
		case 4:
		case 5:
		case 6:
			mes="segundo trimestre";
			break;
		
		case 7:
		case 8:
		case 9:
			mes="tercer trimestre";
			break;
		case 10:
		case 11:
		case 12:
			mes="cuarto trimestre";
			break;
	}
	
	alert("Hoy es "+diaLetra+" y estamos en el "+mes);
}

//for
function bucleFor(){
	
	
	for(a=0;a<=10;a++){
		alert(a+" *5= "+a*5);
	}
	var colores=[rojo, verde, azul];
	var texto="";
	for(b=0;b<colores.length;b++){
		
		texto+=colores[b]+"\n";
		alert(texto);
	}
	
}
