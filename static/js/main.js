


function siguiente(){
    elemento=$('.wizzard').find('li.active');
    texto_elemento = parseInt(elemento.find('.etapa_nombre').text());

    if (validar(texto_elemento)){
        $('div.form-group').removeClass('has-error').parent().removeClass('has-error');
         next=texto_elemento;
         if (texto_elemento < 6 ){
             next=texto_elemento+1;
             elemento.removeClass( "active" ).addClass('done').next().addClass('active');
             //cambiar contenido
             $('#etapa_'+next).addClass('in active');
             $('#etapa_'+texto_elemento).removeClass('in active');

         }
         if (next == 6 ){
             $('#next').addClass('hidden');
             $('#final').removeClass('hidden');
         }
         else if (next > 0 ){
             $('#previous').removeClass('hidden');
         }
    }
}


function  finalizar() {
    if (validar(6)){
           $('div.form-group').removeClass('has-error');
           $('#btn_firma').removeClass('btn-danger').addClass('btn-success');
           $('#myModal').modal('show');
    };
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


    for(var i=0; i<= cant_hijos-1;i++){
        $('.tabla_hijos').find('tbody').append($(" <tr>\n" +
        "                            <td><div class=\"form-group\"><input class=\"form-control input_tabla\" type=”number” name=annoNac min=\"1900\" max=\"2017\"></div></td>\n" +
        "                            <td><div class=\"form-group\"><input class=\"form-control input_tabla\" type=”number” name=annoAdop min=\"1900\" max=\"2017\"></div></td>\n" +
        "                            <td>\n" +
        "                                <div class=\"form-group\"><select id=\"grado_minusvalia\" class=\"form-control select_tabla\">\n" +
        "                                    <option value=\"0\">---Seleccione---</option>\n" +
        "                                    <option value=\"1\">Entre 33% y 64%</option>\n" +
        "                                    <option value=\"2\">65% o superior</option>\n" +
        "                                </select>\n </div>" +
        "                            </td>\n" +
        "                            <td>\n" +
        "                                <div class=\"form-group\"><select id=\"ayuda_personas\" class=\"form-control select_tabla\">\n" +
        "                                    <option value=\"0\">---Seleccione---</option>\n" +
        "                                    <option value=\"1\">Si</option>\n" +
        "                                    <option value=\"2\">No</option>\n" +
        "                                </select>\n</div>" +
        "                            </td>\n" +
        "                            <td>\n" +
        "                                <div class=\"form-group\"><select id=\"convivencia_descendientes\" class=\"form-control select_tabla\">\n" +
        "                                    <option value=\"0\">---Seleccione---</option>\n" +
        "                                    <option value=\"1\">Si</option>\n" +
        "                                    <option value=\"2\">No</option>\n" +
        "                                </select>\n</div>" +
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



    for(var i=0; i<= cant_ascendientes-1;i++){
        $('.tabla_ascencientes').find('tbody').append("<tr>\n" +
             "                           <td><div class=\"form-group\"><input class=\"form-control input_tabla1\" type=”number” name=annoNac min=\"1900\" max=\"2017\"></div></td>\n" +
             "                           <td>\n" +
             "                               <div class=\"form-group\"><select class=\"form-control select_tabla1\">\n" +
             "                                   <option value=\"0\">---Seleccione---</option>\n" +
             "                                   <option value=\"1\">Entre 33% y 64%</option>\n" +
             "                                   <option value=\"2\">65% o superior</option>\n" +
             "                               </select>\n</div>" +
             "                           </td>\n" +
             "                           <td>\n" +
             "                               <div class=\"form-group\"><select class=\"form-control select_tabla1\">\n" +
             "                                   <option value=\"0\">---Seleccione---</option>\n" +
             "                                   <option value=\"1\">Si</option>\n" +
             "                                   <option value=\"2\">No</option>\n" +
             "                               </select>\n</div>" +
             "                           </td>\n" +
             "                           <td>\n" +
             "                               <div class=\"form-group\"><input type=\"number\" class=\"form-control input_tabla1\" id=\"inputcantDescendientes\" max=\"2000\" min=\"1\">\n</div>" +
             "                           </td>\n" +
             "                       </tr>");
    }

    }




}
$(document).ready(function() {


    //Activar mensajes cuando se desencadena el evento hover en los botones de ayuda

    $('.info_movilidad_geografica').hover(
            function(){
                 $('.alerta_info_movilidad_geografica').removeClass('hidden');
            },
            function () {
                $('.alerta_info_movilidad_geografica').addClass('hidden');
            }
        );

    $('.info_rendimiento').hover(
        function(){
            $('.alerta_info_rendimientos').removeClass('hidden');
        },
        function () {
            $('.alerta_info_rendimientos').addClass('hidden');
        }
    );

    $('.info_convivencia').hover(
        function(){
            $('.alerta_info_convivencia').removeClass('hidden');
        },
        function () {
            $('.alerta_info_convivencia').addClass('hidden');
        }
    );

    $('.info_adquisicion').hover(
        function(){
            $('.alerta_info_adquisicion').removeClass('hidden');
        },
        function () {
            $('.alerta_info_adquisicion').addClass('hidden');
        }
    );

    $('.info_anualidades').hover(
        function(){
            $('.alerta_info_anualidades').removeClass('hidden');
        },
        function (){
            $('.alerta_info_anualidades').addClass('hidden');
        }
    );

    $('.info_pensiones').hover(
        function(){
            $('.alerta_info_pensiones').removeClass('hidden');
        },
        function (){
            $('.alerta_info_pensiones').addClass('hidden');
        }
    );


});