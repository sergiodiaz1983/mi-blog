var express = require("express"); /*esto lo genera es como un importa en java*/
var app = express();/*estamos creando un servidor web*/
app.listen(8000);/*levanta e servidor en el puerto 8000*/
app.get("/",function(request,response)  //recibe 2 parametros una cadena y una 
//funcion anonima
{
	response.send("estas aqui");
	
});
console.log("arrancando servidor");/*console es un objeto*/
