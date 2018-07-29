function validacion(){
	
	var nombre,email,telefono,fecha,ciudad,expresion;
nombre = document.getElementById("nombre").value;
email = document.getElementById("email").value;
telefono = document.getElementById("telefono").value;
fecha = document.getElementById("fecha").value;
ciudad = document.getElementById("ciudad").value;

expresion = /\w+@\w+\.+[a-z]/;

if(nombre === "" || email === "" || telefono === "" || fecha === "" || ciudad === "" || (isNaN(telefono)) || (!expresion.test(email))){
	alert("Se encontraron los siguientes errores en sus \n datos de contacto: \nFaltan datos\nLa fecha no es valida \n\n Porfavor corriga los errores para continuar");
	return false;
	}
	
	
	else {
		
		alert("Informacion enviada corectamente");
		
	}
		
	
}