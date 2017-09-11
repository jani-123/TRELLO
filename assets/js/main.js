var cuadroContenido = document.getElementById("divContenido");
var lista = [];
function creaContenido(){
    var textInserta = document.createElement("h4");
    var textInserta1 = document.createTextNode("Añadir Lista...");
        textInserta.setAttribute("id","btnInserta");
        textInserta.setAttribute("onclick","inserta()");
        textInserta.appendChild(textInserta1);
        cuadroContenido.appendChild(textInserta);
}
creaContenido();
function formulario(){
    
    var divFormulario = document.createElement("div");
        divFormulario.setAttribute("class","divFormulario");
    var formCuadro = document.createElement("form");
        formCuadro.setAttribute("class","formulario");
        formCuadro.setAttribute("id","formInserta");
    var divCuadro = document.createElement("div");
        divCuadro.setAttribute("class","form-group");
    var textoCuadro = document.createElement("input"); 
        textoCuadro.setAttribute("class","form-control texto");
        textoCuadro.setAttribute("id","nombreLista");
        textoCuadro.setAttribute("placeholder","Añadir una Lista...");
    var btnGuardar = document.createElement("button");
    var btnGuardar1 = document.createTextNode("Guardar");
        btnGuardar.setAttribute("class","btn btn-success");
        btnGuardar.setAttribute("id","guardar");
        btnGuardar.setAttribute("onclick","muestraFormulario()");
    var btnElimina = document.createElement("button");
    var btnElimina1 = document.createTextNode("X");
        btnElimina.setAttribute("class","btn btn-defaul");
        btnElimina.setAttribute("id","elimina");
        btnElimina.appendChild(btnElimina1);
        btnGuardar.appendChild(btnGuardar1);
        divCuadro.appendChild(textoCuadro);
        formCuadro.appendChild(divCuadro);
        formCuadro.appendChild(btnGuardar);
        formCuadro.appendChild(btnElimina);
        divFormulario.appendChild(formCuadro);
        cuadroContenido.appendChild(divFormulario);
}
function inserta(){
    formulario();
}
function muestraFormulario(){
    var conTitulo = document.getElementById("nombreLista").value;
    var divTarjeta = document.createElement("div");
        divTarjeta.setAttribute("class","divTarjeta");
    var formTarjeta = document.createElement("form");
        formTarjeta.setAttribute("class","tarjeta");
    var titulo = document.createElement("label");
    var titulo1 = document.createTextNode(conTitulo);
    var agregaConte = document.createElement("a"); 
    var agregaConte1 = document.createTextNode("Añade una tarjeta...");
        agregaConte.setAttribute("class","agrega");
        agregaConte.setAttribute("href","#");
        agregaConte.setAttribute("onclick","contenido()");
        titulo.appendChild(titulo1);
        agregaConte.appendChild(agregaConte1);
        formTarjeta.appendChild(titulo);
        formTarjeta.appendChild(agregaConte);
        divTarjeta.appendChild(formTarjeta)
        cuadroContenido.appendChild(divTarjeta);
        creaContenido();
}
function contenido()
{
    var conTitulo = document.getElementById("nombreLista").value;
    var divContenido = document.createElement("div");
        divContenido.setAttribute("class","cajacontenido");
    var formTarjeta = document.createElement("form");
        formTarjeta.setAttribute("class","tarjeta");
    var titulo = document.createElement("label");
    var titulo1 = document.createTextNode(conTitulo);
    var comentario = document.createElement("textarea"); 
        comentario.setAttribute("class","form-control");
        comentario.setAttribute("rows","1");
        comentario.setAttribute("id","comentario");
    var btnAñade = document.createElement("button");
    var btnAñade1 = document.createTextNode("Añadir");
        btnAñade.setAttribute("class","btn btn-success");
        btnAñade.setAttribute("id","añade");
        btnAñade.setAttribute("onclick","TodoList()");
    var btnExit = document.createElement("button");
    var btnExit1 = document.createTextNode("X");
        btnExit.setAttribute("class","btn btn-defaul");
        btnExit.setAttribute("id","exit");
        titulo.appendChild(titulo1);
        btnAñade.appendChild(btnAñade1);
        btnExit.appendChild(btnExit1);
        formTarjeta.appendChild(titulo);
        formTarjeta.appendChild(comentario);
        formTarjeta.appendChild(btnAñade);
        formTarjeta.appendChild(btnExit);
        divContenido.appendChild(formTarjeta);
        cuadroContenido.appendChild(divContenido);
}
function TodoList(){
    var conTitulo = document.getElementById("nombreLista").value;
    var comentarios = document.getElementById("comentario").value;
    lista.push(comentarios);
    var div = document.createElement("div");
        div.setAttribute("class","divLista");
    var formTarjeta = document.createElement("form");
        formTarjeta.setAttribute("class","listas");
    var titulo = document.createElement("label");
    var titulo1 = document.createTextNode(conTitulo);
    var divLista = document.createElement("div");
        divLista.setAttribute("class","listitas");
    for (var i = 0; i <=lista.length; i++) {
		if(lista[i] != undefined){
			var elemenList=document.createElement('p');
		    elemenList.innerHTML = lista[i];
			divLista.appendChild(elemenList);
		}
    }
    var comentario = document.createElement("textarea"); 
        comentario.setAttribute("class","form-control");
        comentario.setAttribute("rows","1");
        comentario.setAttribute("id","comentario");
    var btnAñade = document.createElement("button");
    var btnAñade1 = document.createTextNode("Añadir");
        btnAñade.setAttribute("class","btn btn-success");
        btnAñade.setAttribute("id","añade");
        btnAñade.setAttribute("onclick","TodoList()");
    var btnExit = document.createElement("button");
    var btnExit1 = document.createTextNode("X");
        btnExit.setAttribute("class","btn btn-defaul");
        btnExit.setAttribute("id","exit");
        titulo.appendChild(titulo1);
        btnAñade.appendChild(btnAñade1);
        btnExit.appendChild(btnExit1);
        formTarjeta.appendChild(titulo);
        formTarjeta.appendChild(divLista);
        formTarjeta.appendChild(comentario);
        formTarjeta.appendChild(btnAñade);
        formTarjeta.appendChild(btnExit);
        div.appendChild(formTarjeta);
        cuadroContenido.appendChild(div);
}
