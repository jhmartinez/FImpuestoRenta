


function siguiente(){
    //cambiar wizard active
    elemento=$('.wizzard').find('li.active');
    texto_elemento = parseInt(elemento.find('.etapa_nombre').text());
    next=texto_elemento;
     if (texto_elemento < 6 ){
         next=texto_elemento+1;
         elemento.removeClass( "active" ).addClass('done').next().addClass('active');
     }

     if (next == 6 ){
         $('#next').addClass('hidden');
         $('#final').removeClass('hidden');
     }
     else if (next > 0 ){
         $('#previous').removeClass('hidden');
     }

     //cambiar contenido
     $('#etapa_'+next).addClass('in active');
     $('#etapa_'+texto_elemento).removeClass('in active');

}


function anterior(){
    elemento=$('.wizzard').find('li.active');
    texto_elemento = parseInt(elemento.find('.etapa_nombre').text());

    if (texto_elemento > 1 ){
         next=texto_elemento-1;
         elemento.removeClass( "active" ).addClass('done').prev().addClass('active');
    }

    if (texto_elemento == 6 ){
          $('#final').addClass('hidden');
          $('#next').removeClass('hidden');
    }

        if (next == 1) {
         $('#previous').addClass('hidden');
         $('#next').removeClass('hidden');
    }

    //cambiar contenido
    $('#etapa_'+next).addClass('in active');
    $('#etapa_'+texto_elemento).removeClass('in active');
}


function mostar_info_movilidad_geografica() {

    $('.alerta_info_movilidad_geografica').removeClass('hidden');

}


function ocultar_info_movilidad_geografica() {
     $('.alerta_info_movilidad_geografica').addClass('hidden');
}

function mostar_info_convivencia() {
    $('.alerta_info_convivencia').removeClass('hidden');
}


function ocultar_info_convivencia() {
     $('.alerta_info_convivencia').addClass('hidden');
}


function mostar_info_firma( ){
     $('.alerta_info_firma').removeClass('hidden');
     $('#btn_firma').addClass('hidden');
     $('#btn_cfirma').removeClass('hidden');

}

function ocultar_info_firma( ){
     $('.alerta_info_firma').addClass('hidden');
     $('#btn_firma').removeClass('hidden');
     $('#btn_cfirma').addClass('hidden');

}



function ocultar_info_rendimientos() {
     $('.alerta_info_rendimientos').addClass('hidden');
}


function mostar_info_rendimientos() {
     $('.alerta_info_rendimientos').removeClass('hidden');
}



function ocultar_info_pensiones() {
     $('.alerta_info_pensiones').addClass('hidden');
}


function mostar_info_pensiones() {
     $('.alerta_info_pensiones').removeClass('hidden');
}


function ocultar_info_anualidades() {
     $('.alerta_info_anualidades').addClass('hidden');
}


function mostar_info_anualidades() {
     $('.alerta_info_anualidades').removeClass('hidden');
}


function acitvar_btn_tiene_hijos(tipo) {
   if (tipo == 'si') {
           $('#btn_tiene_hijos_si').removeClass('btn-default').addClass('btn-primary');
           $('#btn_tiene_hijos_no').removeClass('btn-primary').addClass('btn-default');
           $('.cantidad_hijos').removeClass('hidden');
            $('.tabla_hijos').removeClass('hidden');
   }
   else{
       $('#btn_tiene_hijos_si').removeClass('btn-primary').addClass('btn-default');
       $('#btn_tiene_hijos_no').removeClass('btn-primary').addClass('btn-primary');
       $('.cantidad_hijos').addClass('hidden');
       $('.tabla_hijos').addClass('hidden');
   }
}



function acitvar_btn_tiene_ascendientes(tipo) {
   if (tipo == 'si') {
           $('#btn_tiene_ascendientes_si').removeClass('btn-default').addClass('btn-primary');
           $('#btn_tiene_ascendientes_no').removeClass('btn-primary').addClass('btn-default');
           $('.cantidad_ascendientes').removeClass('hidden');
            $('.tabla_ascencientes').removeClass('hidden');
   }
   else{
       $('#btn_tiene_ascendientes_si').removeClass('btn-primary').addClass('btn-default');
       $('#btn_tiene_ascendientes_no').removeClass('btn-primary').addClass('btn-primary');
       $('.cantidad_ascendientes').addClass('hidden');
       $('.tabla_ascencientes').addClass('hidden');
       $('.alerta_info_convivencia').addClass('hidden');

   }
}

function construir_tabla_hijos() {

    cant_hijos=parseInt($('#input_cantidad_hijos').val());
    if (cant_hijos > 0){
        $('.tabla_hijos').find('tbody').empty();
         $('.tabla_hijos').removeClass('hidden');


    for(var i=0; i<= cant_hijos;i++){
        $('.tabla_hijos').find('tbody').append($(" <tr>\n" +
        "                            <td><input class=\"form-control\" type=”number” name=annoNac min=\"1900\" max=\"2017\"></td>\n" +
        "                            <td><input class=\"form-control\" type=”number” name=annoAdop min=\"1900\" max=\"2017\"></td>\n" +
        "                            <td>\n" +
        "                                <select class=\"form-control\">\n" +
        "                                    <option>---Seleccione---</option>\n" +
        "                                    <option>Entre 33% y 64%</option>\n" +
        "                                    <option>65% o superior</option>\n" +
        "                                </select>\n" +
        "                            </td>\n" +
        "                            <td>\n" +
        "                                <select class=\"form-control\">\n" +
        "                                    <option>---Seleccione---</option>\n" +
        "                                    <option>Si</option>\n" +
        "                                    <option>No</option>\n" +
        "                                </select>\n" +
        "                            </td>\n" +
        "                            <td>\n" +
        "                                <select class=\"form-control\">\n" +
        "                                    <option>---Seleccione---</option>\n" +
        "                                    <option>Si</option>\n" +
        "                                    <option>No</option>\n" +
        "                                </select>\n" +
        "                            </td>\n" +
        "                         </tr>"));
    }

    }



}




function construir_tabla_ascendientes() {
     cant_ascendientes=parseInt($('#input_cantidad_ascendientes').val());
    if (cant_ascendientes > 0){
        $('.tabla_ascencientes').find('tbody').empty();
         $('.tabla_ascencientes').removeClass('hidden');



    for(var i=0; i<= cant_ascendientes;i++){
        $('.tabla_ascencientes').find('tbody').append("<tr>\n" +
             "                           <td><input class=\"form-control\" type=”number” name=annoNac min=\"1900\" max=\"2017\"></td>\n" +
             "                           <td>\n" +
             "                               <select class=\"form-control\">\n" +
             "                                   <option>---Seleccione---</option>\n" +
             "                                   <option>Entre 33% y 64%</option>\n" +
             "                                   <option>65% o superior</option>\n" +
             "                               </select>\n" +
             "                           </td>\n" +
             "                           <td>\n" +
             "                               <select class=\"form-control\">\n" +
             "                                   <option>---Seleccione---</option>\n" +
             "                                   <option>Si</option>\n" +
             "                                   <option>No</option>\n" +
             "                               </select>\n" +
             "                           </td>\n" +
             "                           <td>\n" +
             "                               <input type=\"number\" class=\"form-control\" id=\"inputcantDescendientes\" max=\"2000\" min=\"1\">\n" +
             "                           </td>\n" +
             "                       </tr>");
    }

    }

}
$(document).ready(function() {

    $('.info_movilidad_geografica').hover(function(){
       mostar_info_movilidad_geografica()

    }, function () {
        ocultar_info_movilidad_geografica();
    });

    $('.info_rendimiento').hover(function(){
       mostar_info_rendimientos()
    }, function () {
        ocultar_info_rendimientos();
    });

    $('.info_convivencia').hover(function(){
       mostar_info_convivencia();
    }, function () {
        ocultar_info_convivencia();
    });

    $('.info_adquisicion').hover(function(){
       $('.alerta_info_adquisicion').removeClass('hidden');
    }, function () {
        $('.alerta_info_adquisicion').addClass('hidden');
    });






});