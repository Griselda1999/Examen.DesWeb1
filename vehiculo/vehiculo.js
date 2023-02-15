function cargarDatos(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id Vehiculo </th> "+
                        "<th> Numero Placa </th> "+
                        "<th> Color </th> "+
                        "<th> Marca </th> "+
                        "<th> Id Cliente </th> "+
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/gnieto/api/vehiculo",
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id_vehiculo + "</td>" +
                                "<td>" + data[i].num_placa + "</td>"+
                                "<td>" + data[i].color+ "</td>"+
                                "<td>" + data[i].marca+ "</td>"+
                                "<td>" + data[i].id_cliente+ "</td>"+
                               
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reportevehiculo").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

}

function insertarDatos(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        num_placa : $("#num_placa").val(),
        color : $("#color").val(),
        marca : $("#marca").val(),
        id_cliente : $("#id_cliente").val()
       
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/gnieto/api/vehiculo",
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
        num_placa : $("#num_placa").val(),
        color : $("#color").val(),
        marca : $("#marca").val(),
        id_cliente : $("#id_cliente").val()
    };

    let id = $("#id").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/gnieto/api/vehiculo/"+id,
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
        url: "https://desfrlopez.me/gnieto/api/vehiculo/"+id,
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

