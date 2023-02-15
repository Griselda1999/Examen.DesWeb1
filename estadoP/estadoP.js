function cargarDatos(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id Estado </th> "+
                        "<th> Estado pago </th> "+
                        "<th> Id Estacion </th> "+
                        
                       
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/gnieto/api/estado",
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id_estado + "</td>" +
                                "<td>" + data[i].estado_pago + "</td>"+
                                "<td>" + data[i].id_estacion+ "</td>"+
                               
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reporteestado").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

}

function insertarDatos(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        estado_pago : $("#estado_pago").val(),
        id_estacion : $("#id_estacion").val()
       
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
        estado_pago: $("#estado_pago").val(),
        id_estacion : $("#id_estacion").val()
        
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