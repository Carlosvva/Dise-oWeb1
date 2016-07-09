// Javascript Code.
$(document).ready(function () {
    nombre="#nombre";
    comentario="Comentario";
    $("#singlebutton").click(function(){
		$(".tablas").append('<ul class="jumbotron">'+'<li>'+"#nombre"+'</li>'+'<li>'+"#comentario"+'</li>'+'</ul>');
	});
});