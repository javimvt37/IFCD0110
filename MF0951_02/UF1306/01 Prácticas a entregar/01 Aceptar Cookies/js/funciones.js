// JavaScript Document






	var d=new Date();
	var galleta;
function aceptar() {
	document.getElementById("fijar").style.display="none";
	
  d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  galleta=document.cookie = "nombre=mi pimera cookie;" + expires + ";path=/";


}

function chequeo(){
if(document.cookie.search("nombre")>-1){
alert("Bienvenido de nuevo");
}else{
	document.getElementById("fijar").style.display="block";
	alert("Bienvenido por primera vez");
}
	}


function politica(){
	var ventana=window.open();
	ventana.document.write('<main><p>Cookies (mensaje de alerta)</p><p>(Sugiere la AGPD en primer lugar situar en la home un mensaje de alerta avisando al usuario de la utilización de cookies con el siguiente texto -literal de la AGPD-)</p><p>Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación. Si pulsa en el botón o continúa navegando, consideramos que acepta su uso. Puede cambiar la configuración u obtener más información ‘aquí’.</p><p>(El ‘aquí’ del mensaje de alerta debe ser un link que lleva al texto íntegro sobre la política de cookies)</p><p>POLITICA DE COOKIES</p><p>Cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.. El navegador del usuario memoriza cookies en el disco duro solamente durante la sesión actual ocupando un espacio de memoria mínimo y no perjudicando al ordenador. Las cookies no contienen ninguna clase de información personal específica, y la mayoría de las mismas se borran del disco duro al finalizar la sesión de navegador (las denominadas cookies de sesión).</p><p>La mayoría de los navegadores aceptan como estándar a las cookies y, con independencia de las mismas, permiten o impiden en los ajustes de seguridad las cookies temporales o memorizadas.</p><p>Sin su expreso consentimiento –mediante la activación de las cookies en su navegador–XXXXX no enlazará en las cookies los datos memorizados con sus datos personales proporcionados en el momento del registro o la compra.</p><p>¿Qué tipos de cookies utiliza esta página web?</p><p>- Cookies técnicas: Son aquéllas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de videos o sonido o compartir contenidos a través de redes sociales.</p><p>- Cookies de personalización: Son aquéllas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.</p><p>- Cookies de análisis: Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.</p><p>- Cookies publicitarias: Son aquéllas que, bien tratadas por nosotros o por terceros, nos permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web. Para ello podemos analizar sus hábitos de navegación en Internet y podemos mostrarle publicidad relacionada con su perfil de navegación.</p><p>- Cookies de publicidad comportamental: Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado. Estas cookies almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.</p><p>Cookies de terceros: La Web de XXXXX puede utilizar servicios de terceros que, por cuenta de XXXXX, recopilaran información con fines estadísticos, de uso del Site por parte del usuario y para la prestacion de otros servicios relacionados con la actividad del Website y otros servicios de Internet.</p><p>En particular, este sitio Web utiliza Google Analytics, un servicio analítico de web prestado por Google, Inc. con domicilio en los Estados Unidos con sede central en 1600 Amphitheatre Parkway, Mountain View, California 94043.  Para la prestación de estos servicios, estos utilizan cookies que recopilan la información, incluida la dirección IP del usuario, que será transmitida, tratada y almacenada por Google en los términos fijados en la Web Google.com. Incluyendo la posible transmisión de dicha información a terceros por razones de exigencia legal o cuando dichos terceros procesen la información por cuenta de Google.</p><p>(En este punto la AGPD sugiere incluir cada una de las cookies de terceros utilizadas y los datos de dichos terceros. Por evidentes razones en este modelo sólo se ha incluido la Google en el uso de Analytics por ser la más extendida y común.)</p><p>El Usuario acepta expresamente, por la utilización de este Site, el tratamiento de la información recabada en la forma y con los fines anteriormente mencionados. Y asimismo reconoce conocer la posibilidad de rechazar el tratamiento de tales datos o información rechazando el uso de Cookies mediante la selección de la configuración apropiada a tal fin en su navegador. Si bien esta opción de bloqueo de Cookies en su navegador puede no permitirle el uso pleno de todas las funcionalidades del Website.</p><p>Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:</p><p>*Chrome<br>  *Explorer<br>  *Firefox<br>  *Safari</p><p>Si tiene dudas sobre esta política de cookies, puede contactar con XXXXX en info@XXXXX(punto)com</p><!-- Header --><!-- Page content --></main>');
	
}

