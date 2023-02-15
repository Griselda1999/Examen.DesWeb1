function cargarDatos(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id espacio </th> "+
                        "<th> Seccion </th> "+
                        "<th> Numero espacio </th> "+
                        
                       
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/gnieto/api/espacio",
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id_espacio + "</td>" +
                                "<td>" + data[i].seccion+ "</td>"+
                                "<td>" + data[i].num_espacio+ "</td>"+
                               
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reporteespacio").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

}

function insertarDatos(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        seccion : $("#seccion").val(),
        num_espacio : $("#num_espacio").val()
       
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/gnieto/api/espacio",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatos();

}

function actualizarDatos(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        seccion : $("#seccion").val(),
        num_espacio : $("#num_espacio").val()
        
    };

    let id = $("#id").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/gnieto/api/espacio/"+id,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatos();

}

function borrarDatos(){

    jQuery.ajaxSetup({async:false});

    let id = $("#id").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/gnieto/api/espacio/"+id,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatos();

}

