//iimportanto librerias

var express = require("express");
/*esto lo genera es como un importa en java*/
var nunjucks = require("nunjucks");

var app = express();
/*estamos creando un servidor web*/
app.listen(8000);
/*levanta e servidor en el puerto 8000*/

//Configuracion express, aqui es dnde tendremos que llamar a la pagina que hicimos
//primer argumento es un nombre logico  app.use("/css",    ES COMO UN ALIAS
//el segundo es una carpeta real  express.static(__dirname + "/css"));
//el comando static recibe una ruta fisica

app.use("/css", express.static(__dirname + "/css"));
//se usa doble guion bajo en dirname
//static nos da acceso pero debemos saber  el nombre delo s archivos
//el alias es para no exponer
app.use("/css", express.directory(__dirname + "/css"));
//nos permite
//se pondran visibles las caprteas que tenemos en los demas carpetas

app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/videos", express.static(__dirname + "/videos"));
app.use("/javascript", express.static(__dirname + "/javascript"));
//habilita paramtros post
app.use(express.urlencoded());

nunjucks.configure(__dirname + "/vistas", /*la variable dirname es la ruta del archivo donde estan las vistas*/
{
	express : app

});

app.get("/", function(request, response)//recibe 2 parametros una cadena y una funcion anonima. Es para definir la ruta que esta aqui
{
	//response.send("estas aqui");
	response.render("index.html", 
	{
		configuracion : 
		{
			saludo : "Desarrollo Agil como un gato dinámico"
		}
	});
	//lee el archivo que esta en l carpeta de vistas
});

app.get("/contacto", function(request, response)/*request datos del usuario y response lo que quieres mostrarle al usaurio*/
{
	response.render("contacto.html");
});

app.get("/blog",function(request,response)
{
	/*response.send("hola");*/
	
	//definimos un arreglo d 2 objetos de javascript y este arreglo se lo queremos pasar a la vista
	var postEncontrados = 
	[{
		titulo: "post 1",
		descripcion: "descrpcion del post 1(breve)"
		
	}, 
	{
		titulo: "post 2",
		descripcion: "descrpcion del post 2(breve)"
	}];
	
	//abajo definiremos cuando no encuentre un arreglo, simulamos que la BD no tiene articulos
	
	postEncontrados=[];
	
	response.render("blog.html",{posts:postEncontrados});//le mandamos un objeto de javascript y ese post tiene el contenido de los obejtos encontrados
}
);

app.post("/suscribir",function(request,response)
{
	//request todo lo que envia el usuario
	//response es lo que le pintamos al usuario
	
	console.log("email del usuario:" + request.body.email);//body es un objeto que tiene todo lso paramtetros que manda por un http-post
	response.send("email del usuario:" + request.body.email);  
});

app.post("/contactar",function(request,response)
{
	//request todo lo que envia el usuario
	//response es lo que le pintamos al usuario
	
	console.log("Nombre del usuario:" + request.body.nombre);//body es un objeto que tiene todo lso paramtetros que manda por un http-post
	response.send
	(
	"Nombre del usuario:" + request.body.nombre 
	+ ",  email del usuario:" + request.body.email 
	+ ",  website del usuario:" + request.body.website 
	+ ",  edad del usuario:" + request.body.edad 
	+ ",  comentario del usuario:" + request.body.comentario 
	
	);  
 
});


console.log("arrancando servidor");
/*console es un objeto*/
