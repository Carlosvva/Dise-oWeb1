// Javascript Code.
$(document).ready(function () {
    
    var nombre=""
    var comentario=""
    $("#single").click(function(){
        nombre= $('#nombre').val();
        comentario= $('#comentario').val();
            $(".tablas").append('<ul class="jumbotron">'+'<li>'+nombre+'</li>'+'<li>'+comentario+'</li>'+'</ul>');
        $('#nombre').val("")
        $('#comentario').val("")
    });
});