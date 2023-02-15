function cargarDatos(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id Pago </th> "+
                        "<th> Metodo pago </th> "+
                        "<th> Id Estado </th> "+
                        
                       
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/gnieto/api/pago",
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id_pago + "</td>" +
                                "<td>" + data[i].metodo_pago + "</td>"+
                                "<td>" + data[i].id_estado+ "</td>"+
                               
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reportepago").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

}

function insertarDatos(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        metodo_pago : $("#metodo_pago").val(),
        id_estado : $("#id_estado").val()
       
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/gnieto/api/pago",
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
        metodo_pago : $("#metodo_pago").val(),
        id_estado : $("#id_estado").val()
        
    };

    let id = $("#id").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/gnieto/api/pago/"+id,
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
        url: "https://desfrlopez.me/gnieto/api/pago/"+id,
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