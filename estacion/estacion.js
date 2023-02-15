function cargarDatos(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id Estacion </th> "+
                        "<th> Hora Entrada </th> "+
                        "<th> Hora Salida </th> "+
                        "<th> Id Vehiculo </th> "+
                        "<th> Id Espacio </th> "+
                        
                       
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/gnieto/api/estacion",
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id_estacion + "</td>" +
                                "<td>" + data[i].h_entrada+ "</td>"+
                                "<td>" + data[i].h_salida+ "</td>"+
                                "<td>" + data[i].id_vehiculo+ "</td>"+
                                "<td>" + data[i].id_espacio+ "</td>"+
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reporteestacion").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

}

function insertarDatos(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        h_entrada : $("#h_entrada").val(),
        h_salida : $("#h_salida").val(),
        id_vehiculo : $("#h_vehiculo").val(),
        id_espacio : $("#h_espacio").val()
       
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/gnieto/api/estacion",
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
        h_entrada : $("#h_entrada").val(),
        h_salida : $("#h_salida").val(),
        id_vehiculo : $("#h_vehiculo").val(),
        id_espacio : $("#h_espacio").val()
    };

    let id = $("#id").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/gnieto/api/estacion/"+id,
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
        url: "https://desfrlopez.me/gnieto/api/estacion/"+id,
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

